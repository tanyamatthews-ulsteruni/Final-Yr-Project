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
  preferredWorkoutsName: Array<String> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutPlanPage');

    this.getWorkoutPreferencesForUser(this.userWorkoutDetail);
    this.numWorkoutsEachWeek(this.userWorkoutDetail);
    //console.log(this.userWorkoutDetail);
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

  //filter workouts based on user preference
  getPreferredWorkouts(){
    const location = 'Home';
    const locationMatchString;
    const type = 'Strength';
    const typeMatchString;

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

    this.restProvider.getAllWorkoutData()
    .then(data => {
      if(data.hasOwnProperty('results')){
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
