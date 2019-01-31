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
      for(let ex of this.exercises){
        ex.description = ex.description.toString().replace(/<\/?[^>]+(>|$)/g, "");
      }
      console.log(this.exercises);
    }
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExercisesPage');
  }

  clearFilter(){
    //clear fields.
    this.exEquipment = null;
    this.exType = null;
    //get basic exercise list with no features. 
    this.getExercises();
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