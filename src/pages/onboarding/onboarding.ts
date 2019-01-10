import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../core/user.service';
import { FirebaseUserModel } from '../core/user.model';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html',
})
export class OnboardingPage {

  user: FirebaseUserModel = new FirebaseUserModel();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public userService: UserService
  ) {
    
  }

  ionViewDidLoad() {

  }

  storeOnboardingDetails(){
    //get user id to store details under
    var userId = firebase.auth().currentUser.uid;
    this.db.list(userId + '/workoutPreferences/').push({ type: 'title', location: 'name' , fitnessLevel: 'fitnessLevel'});
    this.db.list(userId + '/healthDetails/').push({ weight: 'weight', height: 'height' , age: 'age', activityLevel: 'activityLevel'});
    this.db.list(userId + '/reminderPreferences/').push({ enableReminders: 'enableReminders', frequency: 'frequency' , time: 'time'});

  }

  onboardingDone(){
    //store data on submit of onboarding page. 
    this.storeOnboardingDetails();
    //set root ensures that the menu icon is not hidden. 
    this.navCtrl.setRoot("ProfilePage");
  }

}