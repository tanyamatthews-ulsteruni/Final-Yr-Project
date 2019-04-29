import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { WorkoutHistoryPage } from '../workout-history/workout-history';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

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

  exData: Array<String> = [];

  exerciseCount: number = 0;

  setsToDo: number;
  numDone: number = 0; 

  isEnabled: any;

  buttonClicked: boolean = false;

  addHideWeightText = "Add Exercise Weight";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public restProvider: RestProvider,    
    public db: AngularFireDatabase)
  {
      this.workoutId = navParams.get('id');
      this.workoutName = navParams.get('name');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutStartPage');
    this.getWorkoutSpecifics(this.workoutId);
    this.slides.lockSwipes(true);
  }


  nextSlide(){
    this.slides.lockSwipes(false);
    let currentIndex = this.slides.getActiveIndex();
    var nextSlide = currentIndex + 1;
    this.slides.slideTo(nextSlide,500);
    //reset count of sets
    this.numDone = 0;
    //disable next page button.
    this.isEnabled=false;
    //lock swipes so user can't swipe themselves
    this.slides.lockSwipes(true);
    this.resetNextSlide();
  }

  resetNextSlide(){
    if(this.addHideWeightText == 'Remove Weight'){
      this.buttonClicked = !this.buttonClicked;
      this.addHideWeightText = 'Add Exercise Weight';
      this.weight = null;
    }
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

  setComplete(set){
  	const totalSets = set.obj.sets;
    if(this.numDone == totalSets-1){
      this.numDone = this.numDone + 1;
      this.isEnabled=true; 
    }else if(this.numDone == totalSets){
      this.isEnabled=true; 
    }else if(this.numDone !== totalSets){
    	this.numDone = this.numDone + 1;
    }
  }

 showWeightInput(){
    this.buttonClicked = !this.buttonClicked;
    if(this.addHideWeightText == 'Add Exercise Weight'){
      this.addHideWeightText = 'Remove Weight';
      this.weight = null;
    }else{
      this.addHideWeightText = 'Add Exercise Weight';
    }
  }

  saveWorkoutForUser(){
    var userId = firebase.auth().currentUser.uid;
    console.log('Name = ' + this.workoutName);
    this.db.list(userId + '/workoutHistory/').push({date: Date(), id: this.workoutId, name: this.workoutName});
  }

  goToHistory(){
    this.saveWorkoutForUser();
    this.navCtrl.push(WorkoutHistoryPage);
  }

}

