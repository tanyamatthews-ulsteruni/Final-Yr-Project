import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-exercise-list',
  templateUrl: 'exercise-list.html',
})

export class ExerciseListPage {

	exercises: any; 
  exEquipment: any;
  exType: any;
  results: any;

	constructor(public navCtrl: NavController, public restProvider: RestProvider) {
		this.getExercises();
	}

  getExercises(){
  	this.restProvider.getExercises()
  .then(data => {
    if(data.hasOwnProperty('results')){
      this.exercises = data.results;
      console.log(this.exercises);
    }
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExercisesPage');
  }

  clearFilter(){
    this.exEquipment = null;
    this.exType = null;
  }

  applyFilter(){
    console.log(this.exEquipment);
    console.log(this.exType);
    this.restProvider.getExercisesWithFilter(this.exType, this.exEquipment).then(data =>{
      this.exercises = data.results;
      console.log(this.exercises);
    });

  }

}