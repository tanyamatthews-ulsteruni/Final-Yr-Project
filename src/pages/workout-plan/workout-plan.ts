import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { WorkoutPreferencesDataModel } from '../../app/models/WorkoutPreferencesDataModel';
import {ProfilePage} from '../profile/profile';
import { RestProvider } from '../../providers/rest/rest';

import { WorkoutDetailPage } from '../workout-detail/workout-detail';

@IonicPage()
@Component({
  selector: 'page-workout-plan',
  templateUrl: 'workout-plan.html',
})
export class WorkoutPlanPage {

  userWorkoutDetail: WorkoutPreferencesDataModel = new WorkoutPreferencesDataModel();

  workouts:any;
  workout:any;
  preferredWorkoutsName: Array<String> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {

  }

  ionViewDidEnter() {
    this.getWorkoutPreferencesForUser(this.userWorkoutDetail);
    this.numWorkoutsEachWeek(this.userWorkoutDetail);
    this.getPreferredWorkouts(this.userWorkoutDetail);

  }

  getWorkoutPreferencesForUser(userWorkoutDetail){
    var user = firebase.auth().currentUser;
    var userId = user.uid;    
    firebase.database().ref('/' + userId + '/workoutPreferences/').once('value').then(function(snapshot){
      snapshot.forEach((childSnapshot => {
        userWorkoutDetail.setLocation(childSnapshot.val().location);
        userWorkoutDetail.setFitnessLevel(childSnapshot.val().fitnessLevel);
        userWorkoutDetail.setType(childSnapshot.val().type);
        userWorkoutDetail.setDayOfWorkout(childSnapshot.val().dayOfWorkout);
      }))
    });
  }

  numWorkoutsEachWeek(userWorkoutDetail){
	var user = firebase.auth().currentUser;
    var userId = user.uid;
    firebase.database().ref('/' + userId + '/workoutPreferences/').once('value').then(function(snapshot){
    	snapshot.forEach((childSnapshot => {
    		userWorkoutDetail.setDayOfWorkout(childSnapshot.val().dayOfWorkout);
    	}))
	});
	}	

  getProfilePage(){
  	this.navCtrl.push(ProfilePage);
  }


  viewMoreDetail(workout){
    this.navCtrl.push(WorkoutDetailPage, {
      data: workout
    });
  }

   //filter workouts based on user preference
  getPreferredWorkouts(workout){
    //clear array on reload of page, sometimes this can cache e.g. if updating profile and then the array is added too. 
    this.preferredWorkoutsName = [];
    const locationMatchString;
    const typeMatchString;
    this.restProvider.getAllWorkoutData()
    .then(data => {
      if(data.hasOwnProperty('results')){
        const location = workout.getLocation();
        const type = workout.getType();

        if(location == 'Home'){
          locationMatchString = '#NoEquipment';
        }else{
          locationMatchString = '#Equipment';
        }
        if(type == 'Strength'){
          typeMatchString = '#Strength';
        }else{
          typeMatchString = '#Cardio';
        }
        this.workouts = data.results;
        for(let w of this.workouts){
          //pushing workout into array. Here you can access id through 'id' and name using 'comment.'
          if(w.comment.includes(locationMatchString) && w.comment.includes(typeMatchString)){
          //checking if name contains preference. 
            this.preferredWorkoutsName.push(w);
            console.log(w);
          }
        } 
      }
    });
  }


}
