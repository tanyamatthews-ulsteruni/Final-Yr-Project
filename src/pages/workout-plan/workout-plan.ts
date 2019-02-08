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
    this.getWorkouts();
    console.log(this.getWorkouts());

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

  getWorkouts(){
  this.restProvider.getAllWorkoutData()
  .then(data => {
    if(data.hasOwnProperty('results')){
      this.workouts = data.results;
      for(let w of this.workouts){
      	this.workoutIds.push(w.id);
      	this.getWorkoutSpecifics(w.id);  	  }	
    }
  });
  }

  getWorkoutSpecifics(id: any){
  	console.log(id + " current workout");
  	this.restProvider.getCurrentWorkoutData(id).then(data =>{
  		console.log(data);
  		this.workout = data;
  		const obj = this.workout.day_list;
  		console.log("Description: " + obj[0].obj.description);
  		for(let i of obj[0].set_list){
  			console.log(i.exercise_list);
  			let exList = i.exercise_list;
  			this.exercisesNamesInWorkout.push(exList[0].obj);
  			console.log(exList[0].obj.name)
  		}
  		//console.log("Exercise: " + obj[0].set_list.obj.name);
  		console.log("Sets: " );
  	})
  }

}
