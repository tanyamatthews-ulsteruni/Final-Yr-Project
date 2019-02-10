import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { WorkoutPreferencesDataModel } from '../../app/models/WorkoutPreferencesDataModel';
import {ProfilePage} from '../profile/profile';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-workout-plan',
  templateUrl: 'workout-plan.html',
})
export class WorkoutPlanPage {

  userWorkoutDetail: WorkoutPreferencesDataModel = new WorkoutPreferencesDataModel();
  workouts:any;
  workout:any;
  workoutIds: Array<String> = [];

  exercisesNamesInWorkout: Array<String> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutPlanPage');

    this.getWorkoutDetails(this.userWorkoutDetail);
    this.numWorkoutsEachWeek(this.userWorkoutDetail);
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

  numWorkoutsEachWeek(userWorkoutDetail){
	var user = firebase.auth().currentUser;
    var userId = user.uid;
    firebase.database().ref('/' + userId + '/workoutPreferences/').once('value').then(function(snapshot){
    	snapshot.forEach((childSnapshot => {
    		userWorkoutDetail.dayOfWorkout = childSnapshot.val().dayOfWorkout;
    	}))
	});
	}	

  getProfilePage(){
  	this.navCtrl.push(ProfilePage);
  }



}
