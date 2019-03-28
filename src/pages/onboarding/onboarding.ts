import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html',
})

export class OnboardingPage {

  @ViewChild(Slides) slides: Slides;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public db: AngularFireDatabase,
  ) {
  }

  workoutTypes; workoutLocation; fitnessLevel; workoutLevel; workoutDay;
  weight; height; age; activityLevel; 
  remindersEnabled; reminderFrequency; reminderTime; 
  
  nextSlide(){
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    var nextSlide = currentIndex + 1;
    this.slides.slideTo(nextSlide,500);
  }

  storeOnboardingDetails(){
    //get user id to store details under
    var userId = firebase.auth().currentUser.uid;
    //store workout preferences to firebase. 
    this.db.list(userId + '/workoutPreferences/').push({ type: this.workoutTypes, location: this.workoutLocation , fitnessLevel: this.workoutLevel, dayOfWorkout: this.workoutDay});
    //store health details to firebase.
    this.db.list(userId + '/healthDetails/').push({ weight: this.weight, height: this.height , age: this.age, activityLevel: this.activityLevel});
    //check if user has enabled reminders, if so store all reminder data. 
    if(this.remindersEnabled){
          this.db.list(userId + '/reminderPreferences/').push({ enableReminders: this.remindersEnabled, frequency: this.reminderFrequency , time: this.reminderTime});
    }//if not store only preference to not enable reminders. 
    else{
      this.db.list(userId + '/reminderPreferences/').push({ enableReminders: this.remindersEnabled, frequency: "", time: ""});
    }
  }

  onboardingDone(){
    //store data on submit of onboarding page. 
    this.storeOnboardingDetails();
    //set root ensures that the menu icon is not hidden. 
    this.navCtrl.push(LoginPage);
  }

}