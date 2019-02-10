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
  workoutIds: Array<String> = [];  

  workoutNames: Array<String> = [];

  exercisesNamesInWorkout: Array<String> = [];

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
      	this.workoutIds.push(w.id);
      	this.getWorkoutSpecifics(w.id);  	  }	
    }
  });
  }

  getWorkoutSpecifics(id: any){
  	console.log(id + " current workout");
  	this.restProvider.getCurrentWorkoutData(id).then(data =>{
  		this.workout = data;
  		const obj = this.workout.day_list;
  		console.log(obj[0]);
  		console.log(obj[0].obj);
  		this.workoutNames.push(obj[0].obj);
  	})
  }

  getExerciseByWorkout(){
  	this.restProvider.getCurrentWorkoutData(id).then(data =>{
  		console.log(data);
  		this.workout = data;
  		const obj = this.workout.day_list;
  		for(let i of obj[0].set_list){
  			let exList = i.exercise_list;
  			this.exercisesNamesInWorkout.push(exList[0].obj);
  		}
  	})
  }

  viewMoreDetail(id){
  	this.navCtrl.push(WorkoutDetailPage, {
      data: id
    });
  }

}
