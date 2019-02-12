import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ExerciseDetailPage } from '../../pages/exercise-detail/exercise-detail';

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
    this.restProvider.getExercisesWithFilter(this.exType, this.exEquipment).then(data =>{
      this.exercises = data.results;
      for(let ex of this.exercises){
        ex.description = ex.description.toString().replace(/<\/?[^>]+(>|$)/g, "");
      }
    });
  }

  viewMoreDetail(ex){
    this.navCtrl.push(ExerciseDetailPage, {
      data: ex
    });
  }

}