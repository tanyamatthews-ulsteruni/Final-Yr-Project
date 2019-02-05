import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// db imports
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-update-workout-details',
  templateUrl: 'update-workout-details.html',
})
export class UpdateWorkoutDetailsPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,  		
  	public db: AngularFireDatabase
  	) 
  {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateWorkoutDetailsPage');
  }

   update(workoutTypes, workoutLocation, workoutLevel, workoutDay){

    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/' + userId + '/workoutPreferences/').once('value').then(function(snapshot){

     snapshot.forEach((childSnapshot => {
        console.log('/' + userId + '/workoutPreferences/' + childSnapshot.key);
        firebase.database().ref('/' + userId + '/workoutPreferences/' + childSnapshot.key).update({dayOfWorkout: workoutDay, fitnessLevel: workoutLevel, location: workoutLocation, type: workoutTypes});
      }));

    })

    //return to previous page 
    this.navCtrl.pop();
 
  }


}
