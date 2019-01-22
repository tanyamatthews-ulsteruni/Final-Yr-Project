import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//page imports 
import { UpdateHealthDetailsPage } from '../update-health-details/update-health-details';
import { UpdateReminderDetailsPage } from '../update-reminder-details/update-reminder-details';
import { UpdateWorkoutDetailsPage } from '../update-workout-details/update-workout-details';
import { UpdateUserDetailsPage } from '../update-user-details/update-user-details';
//database imports 
import { FirebaseUserModel } from '../core/user.model';
import { UserService } from '../core/user.service';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
//data model imports 
import { HealthDetailsDataModel } from '../../app/models/HealthDetailsDataModel';
import { ReminderPreferencesDataModel } from '../../app/models/ReminderPreferencesDataModel';
import { WorkoutPreferencesDataModel } from '../../app/models/WorkoutPreferencesDataModel';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user: FirebaseUserModel = new FirebaseUserModel();
  userHealthDetail: HealthDetailsDataModel = new HealthDetailsDataModel();
  userReminderDetail: ReminderPreferencesDataModel = new ReminderPreferencesDataModel();
  userWorkoutDetail: WorkoutPreferencesDataModel = new WorkoutPreferencesDataModel();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public userService: UserService
  ) {
    
  }

  ionViewDidEnter(){
    this.userService.getCurrentUser()
    .then(user => {
      this.user = user;
      console.log(user);
    }, err => console.log(err))

    this.getHealthDetails(this.userHealthDetail);
    this.getReminderDetails(this.userReminderDetail);
    this.getWorkoutDetails(this.userWorkoutDetail);

  }

  getHealthDetails(userHealthDetail){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    firebase.database().ref('/' + userId + '/healthDetails/').once('value').then(function(snapshot){
      snapshot.forEach((childSnapshot => {
        userHealthDetail.age = childSnapshot.val().age;
        userHealthDetail.weight = childSnapshot.val().weight;
        userHealthDetail.height = childSnapshot.val().height; 
        userHealthDetail.activityLevel = childSnapshot.val().activityLevel;
        console.log(childSnapshot.val().age);

      }));
    });
  }

  getReminderDetails(userReminderDetail){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    firebase.database().ref('/' + userId + '/reminderPreferences/').once('value').then(function(snapshot){
      snapshot.forEach((childSnapshot => {
        userReminderDetail.enableReminders = childSnapshot.val().enableReminders;
        userReminderDetail.frequency = childSnapshot.val().frequency;
        userReminderDetail.time = childSnapshot.val().time;

        //this.reminderFrequency = childSnapshot.val().frequency;
      }));
    });
  } 

  getWorkoutDetails(userWorkoutDetail){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    firebase.database().ref('/' + userId + '/workoutPreferences/').once('value').then(function(snapshot){
      snapshot.forEach((childSnapshot => {
        userWorkoutDetail.fitnessLevel = childSnapshot.val().fitnessLevel;
        userWorkoutDetail.location = childSnapshot.val().location;
        userWorkoutDetail.type = childSnapshot.val().type;
        userWorkoutDetail.dayOfWorkout = childSnapshot.val().dayOfWorkout;
      }))
    });
  }

  updateUserDetails():void{
    this.navCtrl.push(UpdateUserDetailsPage);
  }

  updateWorkoutPreferences():void{
    this.navCtrl.push(UpdateWorkoutDetailsPage);
  }
  updateReminderPreferences():void{
    this.navCtrl.push(UpdateReminderDetailsPage);
  }

  updateHealthDetail():void{
    this.navCtrl.push(UpdateHealthDetailsPage);
  }

}
