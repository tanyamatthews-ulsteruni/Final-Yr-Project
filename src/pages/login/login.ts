import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { AuthService } from '../core/auth.service';
//import page
import { PasswordResetPage } from '../password-reset/password-reset';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    public formBuilder: FormBuilder
  ) {}

  ionViewWillLoad(){
    this.loginForm = this.formBuilder.group({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

 
  //standard email & password login 
  tryLogin(value){
    this.authService.doLogin(value)
    .then(res => {
      //direct user to homepage on success. 
      this.navCtrl.setRoot(HomePage);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }

  //facebook login
  tryFacebookLogin(){
    this.authService.doFacebookLogin()
    .then((res) => {
      //direct user to homepage on success. 
      this.navCtrl.setRoot(HomePage);
    }, (err) => {
      this.errorMessage = err.message;
    });
  }

  //google login
  tryGoogleLogin(){
    this.authService.doGoogleLogin()
    .then((res) => {
      //direct user to homepage on success. 
      this.navCtrl.setRoot(HomePage);
    }, (err) => {
      this.errorMessage = err.message;
    });
  }

  goRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }

  resetPassword(){
    this.navCtrl.push(PasswordResetPage);
  }

}
