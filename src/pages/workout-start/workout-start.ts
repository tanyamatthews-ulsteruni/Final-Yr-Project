import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-workout-start',
  templateUrl: 'workout-start.html',
})
export class WorkoutStartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	console.log(navParams.get('data'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutStartPage');
  }

}
