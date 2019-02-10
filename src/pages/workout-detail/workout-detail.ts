import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WorkoutDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workout-detail',
  templateUrl: 'workout-detail.html',
})
export class WorkoutDetailPage {

  workout: Array<String> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.workout.push(navParams.get('data'));
  	console.log(navParams.get('data'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutDetailPage');
    console.log(this.workout);
  }

}
