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

  equipment: any;

  workoutTypeFilter:any;
  equipFilter:any;

  workoutNames: Array<String> = [];

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutsPage');
    this.getWorkouts();
  }

  getWorkouts(){
  this.workoutNames = [];
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

  clearFilter(){
    //clear fields.
    this.workoutTypeFilter = null;
    this.equipFilter = false;
    //get basic exercise list with no features. 
    this.getWorkouts();
  }

  applyFilter(){
    this.workoutNames = [];
    //const equipment = ''; 
    if(this.equipFilter == true){
      this.equipment ='#Equipment';
    }else{
      this.equipment ='#NoEquipment';
    }

    this.restProvider.getAllWorkoutData().then(data =>{
    //this.exercises = data.results;

    if(data.hasOwnProperty('results')){
      for(let w of this.workouts){
        if(w.comment.includes(this.workoutTypeFilter) && w.comment.includes(this.equipment)){
          this.workoutNames.push(w);
        }
      }
    }
    });
  }

}
