import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { UserService } from '../core/user.service';
import { AuthService } from '../core/auth.service';
import { FirebaseUserModel } from '../core/user.model';
import * as firebase from 'firebase';

//models 
import { HealthDetailsDataModel } from '../../app/models/HealthDetailsDataModel';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

 user: FirebaseUserModel = new FirebaseUserModel();
 userHealthDetail: HealthDetailsDataModel = new HealthDetailsDataModel();

  constructor(
    public navCtrl: NavController,
    public userService: UserService,
    public authService: AuthService,
    private alertCtrl: AlertController
  ) {
  }

  ionViewWillLoad(){
    this.calculateBMI(this.userHealthDetail);
    this.userService.getCurrentUser()
    .then(user => {
      this.user = user;
    }, err => console.log(err))
  }


  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.navCtrl.pop();
    }, (error) => {
      console.log("Logout error", error);
    });
  }

  calculateBMI(userHealthDetail){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    firebase.database().ref('/' + userId + '/healthDetails/').once('value').then(function(snapshot){
      snapshot.forEach((childSnapshot => {
        userHealthDetail.weight = childSnapshot.val().weight;
        userHealthDetail.height = childSnapshot.val().height; 
        // if height and weight populated, calculate BMI.
        if(userHealthDetail.weight != null || userHealthDetail.height != null){
          var heightInMeters = parseInt(userHealthDetail.height) / 100;
          var heightSq = heightInMeters * heightInMeters;
          //set bmi value and round to 2 decimal places. 
          userHealthDetail.bmi = Number(parseInt(userHealthDetail.weight) / heightSq).toFixed(2);
          var bmi = userHealthDetail.bmi;
          if(bmi < 18.5){
            userHealthDetail.bmiDescription = "Underweight";
          }else if(bmi > 18.5 && bmi <25){
            userHealthDetail.bmiDescription = "Normal range";
          }else if(bmi >= 25){
            userHealthDetail.bmiDescription = "Overweight";
          }
        }
        
      }));
    });
  }

}