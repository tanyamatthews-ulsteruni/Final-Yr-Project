import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { WorkoutStartPage } from '../workout-start/workout-start';
import { WorkoutHistoryPage } from '../workout-history/workout-history';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-workout-detail',
  templateUrl: 'workout-detail.html',
})

export class WorkoutDetailPage {

  workout: Array<String> = [];
  workoutName: String;
  exerciseInWorkoutDetail: Array<String> = [];
  musclesWorked: Array<String> = [];
  workoutId: String;

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public restProvider: RestProvider, 
      public db: AngularFireDatabase,
      private alertCtrl: AlertController
    ) 
  {
  	this.workout.push(navParams.get('data'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutDetailPage');
    this.workoutId = this.workout[0].id;
    this.workoutName = this.workout[0].comment;
    this.getWorkoutSpecifics(this.workout[0].id);
  }

  getWorkoutSpecifics(id: any){
    this.restProvider.getCurrentWorkoutData(id).then(data =>{
      this.workout = data;
      const setList = this.workout.day_list[0].set_list;
      for(let x of setList){
        this.exerciseInWorkoutDetail.push(x.exercise_list[0].obj);
      }
    })
  }

  startWorkout(x, y){
    //console.log("Data to pass: " + this.workoutId);
    this.navCtrl.push(WorkoutStartPage, {
      id: x, 
      name: y
    });
  }

  logWorkout(x, y){
    var userId = firebase.auth().currentUser.uid;
    console.log('Name = ' + this.workoutName);
    this.db.list(userId + '/workoutHistory/').push({date: Date(), id: x, name: y});
    this.navCtrl.push(WorkoutHistoryPage);

    let alert = this.alertCtrl.create({
      title: "Workout logged",
      subTitle: "Great news on completing another workout, keep up the brilliant work!",
      buttons: ['OK']
    });
    alert.present();
  }

}
