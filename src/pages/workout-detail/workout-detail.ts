import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { WorkoutStartPage } from '../workout-start/workout-start';

@IonicPage()
@Component({
  selector: 'page-workout-detail',
  templateUrl: 'workout-detail.html',
})

export class WorkoutDetailPage {

  workout: Array<String> = [];
  workoutName: String;
  exerciseInWorkoutDetail: Array<String> = [];
  musclesWorked: Array<String> = [];
  workoutId: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  	this.workout.push(navParams.get('data'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutDetailPage');
    this.workoutId = this.workout[0].id;
    this.workoutName = this.workout[0].comment;
    this.getWorkoutSpecifics(this.workout[0].id);
  }

  getWorkoutSpecifics(id: any){
    this.restProvider.getCurrentWorkoutData(id).then(data =>{
      this.workout = data;
      const setList = this.workout.day_list[0].set_list;
      for(let x of setList){
        this.exerciseInWorkoutDetail.push(x.exercise_list[0].obj);
        //this.musclesWorked = setList.muscles.back[0];
        //this.musclesWorked = setList.muscles.front[0];
      }
    })
  }

  startWorkout(x, y){
    //console.log("Data to pass: " + this.workoutId);
    this.navCtrl.push(WorkoutStartPage, {
      id: x, 
      name: y
    });
  }

}
