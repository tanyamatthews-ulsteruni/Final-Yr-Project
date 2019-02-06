import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { WorkoutPreferencesDataModel } from '../../app/models/WorkoutPreferencesDataModel';

@IonicPage()
@Component({
  selector: 'page-workout-plan',
  templateUrl: 'workout-plan.html',
})
export class WorkoutPlanPage {

  userWorkoutDetail: WorkoutPreferencesDataModel = new WorkoutPreferencesDataModel();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutPlanPage');

    this.getWorkoutDetails(this.userWorkoutDetail);

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

  numWorkoutsEachWeek(){
  	var count = userWorkoutDetail.dayOfWorkout.split(',');  
  	console.log(count);
  }
}
