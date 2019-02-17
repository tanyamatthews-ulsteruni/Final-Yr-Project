import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as firebase from 'firebase';
//import data model 
import { WorkoutHistoryDataModel } from '../../app/models/WorkoutHistoryDataModel';


@IonicPage()
@Component({
  selector: 'page-workout-history',
  templateUrl: 'workout-history.html',
})
export class WorkoutHistoryPage {

  workoutName = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutHistoryPage');
    this.viewCtrl.showBackButton(false);
    this.workoutName = this.getWorkoutHistory();

  }

  getWorkoutHistory(){
    var user = firebase.auth().currentUser;
  	var userId = user.uid;
  	const test = [];
  	firebase.database().ref('/' + userId + '/workoutHistory/').once('value').then(function(snapshot){
  		snapshot.forEach((childSnapshot=>{
  			let wId = childSnapshot.val().id;
  			let wName = childSnapshot.val().name;
  			let wDate = childSnapshot.val().date;
  			test.push({
  				id: wId,
  				name: wName, 
  				date: wDate
  			});
  			/*for(let k in result){
  				console.log('RESULT' + result[k]);
  				test.push({
  					id: k, 
  					value: result[k]
  				})
  			}*/
  		}));
  	});
    return test;
  }

}
