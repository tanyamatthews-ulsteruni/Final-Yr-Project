import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-workout-start',
  templateUrl: 'workout-start.html',
})
export class WorkoutStartPage {

  @ViewChild(Slides) slides: Slides;

  workoutId: String; 
  workoutName: String;
  exerciseInWorkoutDetail: Array<String> = [];

  exerciseImageData: any;
  exData: Array<String> = [];



  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  	this.workoutId = navParams.get('data');	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutStartPage');
    console.log(this.workoutId);
    this.getWorkoutSpecifics(this.workoutId);
  }


  getWorkoutSpecifics(id: any){
    this.restProvider.getCurrentWorkoutData(id).then(data =>{
      this.workout = data;
      const setList = this.workout.day_list[0].set_list;
      for(let x of setList){
        this.exerciseInWorkoutDetail.push(x);     
        //const exId = x.exercise_list[0].obj.id;   
        //this.getExerciseDetail(exId);

      }
    })
  }

  getImage(id: any){
    this.restProvider.getExerciseImage(id).then(data =>{
      this.exerciseImageData = data.results;
    });
  }

  getExerciseDetail(id: any){
  	this.restProvider.getExerciseMoreData(id).then(data =>{
  		console.log(data);
  		this.exData.push(data);
  	});
  }



}

