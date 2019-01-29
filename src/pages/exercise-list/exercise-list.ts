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

	constructor(public navCtrl: NavController, public restProvider: RestProvider) {
		this.getExercises();
	}

  	getExercises(){
  		this.restProvider.getExercises()
    .then(data => {
      this.exercises = data.results;
      console.log(this.exercises);
    });
  	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExercisesPage');
  }

}