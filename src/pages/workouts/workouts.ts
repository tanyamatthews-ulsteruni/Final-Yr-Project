import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { WorkoutDetailPage } from '../workout-detail/workout-detail';

@IonicPage()
@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
})
export class WorkoutsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  workouts:any;
  workout:any;

  workoutNames: Array<String> = [];

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutsPage');
    this.getWorkouts();
  }

  getWorkouts(){
  this.restProvider.getAllWorkoutData()
  .then(data => {
    if(data.hasOwnProperty('results')){
      this.workouts = data.results;
      for(let w of this.workouts){
        //pushing workout into array. Here you can access id through 'id' and name using 'comment.'
        this.workoutNames.push(w);
      }	
    }
  });
  }

  viewMoreDetail(workout){
  	this.navCtrl.push(WorkoutDetailPage, {
      data: workout
    });
  }

}
