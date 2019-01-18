import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import { UserService } from '../core/user.service';
import { FirebaseUserModel } from '../core/user.model';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html',
})

export class OnboardingPage {

  user: FirebaseUserModel = new FirebaseUserModel();
  @ViewChild(Slides) slides: Slides;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public userService: UserService
  ) {
  
  }

  nextSlide(){
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    var nextSlide = currentIndex + 1;
    this.slides.slideTo(nextSlide,500);
  }

  storeOnboardingDetails(){
    //get user id to store details under
    var userId = firebase.auth().currentUser.uid;

    this.db.list(userId + '/workoutPreferences/').push({ type: this.workoutTypes, location: this.workoutLocation , fitnessLevel: this.workoutLevel, dayOfWorkout: this.workoutDay});
    this.db.list(userId + '/healthDetails/').push({ weight: this.weight, height: this.height , age: this.age, activityLevel: this.activityLevel});
    if(this.enableReminders){
          this.db.list(userId + '/reminderPreferences/').push({ enableReminders: this.remindersEnabled, frequency: this.reminderFrequency , time: this.reminderTime});
    }
    else{
      this.db.list(userId + '/reminderPreferences/').push({ enableReminders: this.remindersEnabled, frequency: null, time: null});
    }

  }

  onboardingDone(){
    //store data on submit of onboarding page. 
    this.storeOnboardingDetails();
    //set root ensures that the menu icon is not hidden. 
    this.navCtrl.push(LoginPage);
  }

}