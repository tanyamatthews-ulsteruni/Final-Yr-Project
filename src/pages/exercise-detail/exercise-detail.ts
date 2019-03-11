import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-exercise-detail',
  templateUrl: 'exercise-detail.html',
})
export class ExerciseDetailPage {

  ex: any;
  exerciseImageData: any;
  exerciseImageString: string;

  exercises: any;
  muscles: any;
  second_muscles: any;
  equipment: any;

  id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  	this.ex = navParams.get('data');
  	this.getExerciseDetail();

  }

  ionViewDidLoad() {
    this.getImage();
    this.getExerciseDetail();
  } 

  getImage(){
  	console.log("DA ID " + this.ex.id);
    this.restProvider.getExerciseImage(this.ex.id).then(data =>{
      this.exerciseImageData = data.results;
    });
  }

  getExerciseDetail(){
  	console.log("ID = " + this.ex.id);
  	this.restProvider.getExerciseMoreData(this.ex.id).then(data =>{
  		this.exercises = data;
  		this.muscles = data.muscles;
  		this.second_muscles = data.secondary_muscles;
  		this.equipment = data.equipment;
  	});
  }

}
