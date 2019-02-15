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

  exerciseCount: number = 0;

  setsToDo: number;
  numDone: number = 0; 

  isEnabled: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  	this.workoutId = navParams.get('data');	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutStartPage');
    console.log(this.workoutId);
    this.getWorkoutSpecifics(this.workoutId);
  }

    nextSlide(){
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    var nextSlide = currentIndex + 1;
    this.slides.slideTo(nextSlide,500);
    //reset count of sets
    this.numDone = 0;
    //disable next page button.
    this.isEnabled=false;
    //add something to check if last workout!
    //display summary of workout / go to history and save workout. 
  }

  getWorkoutSpecifics(id: any){
    this.restProvider.getCurrentWorkoutData(id).then(data =>{
      this.workout = data;
      const setList = this.workout.day_list[0].set_list;
      for(let x of setList){
        this.exerciseInWorkoutDetail.push(x);  
        this.exerciseCount = this.exerciseCount + 1;   
        x.exercise_list[0].obj.description = x.exercise_list[0].obj.description.toString().replace(/<\/?[^>]+(>|$)/g, "");
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

  setComplete(set){
    console.log("HELLO");
  	const totalSets = set.obj.sets;
    if(this.numDone == totalSets){
      this.isEnabled=true; 
    }else if(this.numDone !== totalSets){
    	this.numDone = this.numDone + 1;
    }else if(this.numDone == totalSets-1){
      this.numDone = this.numDone + 1;
      this.isEnabled=true; 
    }
  }





}

