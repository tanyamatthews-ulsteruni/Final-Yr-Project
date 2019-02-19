import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as firebase from 'firebase';

import { WorkoutStatsDataModel } from '../../app/models/WorkoutStatsDataModel';

@IonicPage()
@Component({
  selector: 'page-workout-history',
  templateUrl: 'workout-history.html',
})
export class WorkoutHistoryPage {

 workoutStats: WorkoutStatsDataModel = new WorkoutStatsDataModel();


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  
  }
  
  workoutName = [];
  workoutCount: number;

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutHistoryPage');
    this.viewCtrl.showBackButton(false);
    this.workoutName = this.getWorkoutHistory();
    this.countWorkouts(this.workoutStats);
    this.getLastWorkout(this.workoutStats);
  }

  getWorkoutHistory(){
    var user = firebase.auth().currentUser;
  	var userId = user.uid;
  	const data = [];
  	firebase.database().ref('/' + userId + '/workoutHistory/').once('value').then(function(snapshot){
  		snapshot.forEach((childSnapshot=>{
  			let wId = childSnapshot.val().id;
  			let wName = childSnapshot.val().name;
  			let wDate = childSnapshot.val().date;
  			data.push({
  				id: wId,
  				name: wName, 
  				date: wDate
  			});
  		}));
  	});
    return data;
  }

  countWorkouts(w){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    firebase.database().ref('/' + userId + '/workoutHistory/').once('value').then(function(snapshot){
      w.countOfWorkout = snapshot.numChildren();
    });
  }

  getLastWorkout(w){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    firebase.database().ref('/' + userId + '/workoutHistory/').limitToLast(1).once('value').then(function(snapshot){
      console.log(snapshot);
      snapshot.forEach((childSnapshot=>{
        w.lastWorkoutDay = childSnapshot.val().date;
      }))
    });
  }

}
