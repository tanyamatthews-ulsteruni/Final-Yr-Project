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
  id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  	this.ex = navParams.get('data');
  }

  ionViewDidLoad() {
    console.log("ID: " + this.ex.category.id);
    this.getImage();
  }

  getImage(){
  	console.log("DA ID " + this.ex.id);
  	this.id = this.ex.id;
    this.restProvider.getExerciseImage(this.id).then(data =>{
      this.exerciseImageData = data;
      console.log(this.exerciseImageData.image);
      this.exerciseImageString = this.exerciseImageData.image;
    });
  }

}
