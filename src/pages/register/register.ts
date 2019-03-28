import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { UserService } from '../core/user.service';
import { AuthService } from '../core/auth.service';
import { FirebaseUserModel } from '../core/user.model';
import * as firebase from 'firebase';

import { UserPage } from '../user/user';
import { RegisterDisclaimerPage } from '../register-disclaimer/register-disclaimer';
import { OnboardingPage } from '../onboarding/onboarding';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    public formBuilder: FormBuilder,
    public userService: UserService
  ) {}

  ionViewWillLoad(){
    this.registerForm = this.formBuilder.group({
      fullname: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      passwordConfirm: new FormControl()
    });
  }

  tryRegister(value){
    if(value.password == value.passwordConfirm){
      this.authService.doRegister(value)
       .then(res => {
         this.errorMessage = "";
        console.log(value.email); 
        var user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: value.fullname,
          photoURL: ""
        });
        user.updateEmail(value.email).then(function(){
          //success 
          console.log('Email updated successfully');
        }).catch(function(error){
          //error
          console.log('Error updating email.');
        });

         //push to disclaimer page to accept disclaimer
         this.navCtrl.push(RegisterDisclaimerPage);
         console.log(res);   
       }, err => {
         this.errorMessage = err.message;
         this.successMessage = "";
       })
     }else{
      this.errorMessage = "Passwords don't match. Please ensure passwords match.";
     }
  }

  tryFacebookLogin(){
    this.authService.doFacebookLogin()
    .then((res) => {
      this.navCtrl.push(OnboardingPage);
    }, (err) => {
      this.errorMessage = err.message;
    });
  }

  tryGoogleLogin(){
    this.authService.doGoogleLogin()
    .then((res) => {
      this.navCtrl.push(OnboardingPage);
    }, (err) => {
      this.errorMessage = err.message;
    });
  }
  
  goLoginPage(){
    this.navCtrl.pop();
  }

}
