import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddGoalPage } from '../add-goal/add-goal';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-goals',
  templateUrl: 'goals.html',
})
export class GoalsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  weightGoalData = [];
  workoutGoalData = [];
  otherGoalData = [];

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalsPage');

    this.weightGoalData = this.getWeightGoals();
    this.workoutGoalData = this.getWorkoutGoals();
    this.otherGoalData = this.getOtherGoals();
  }

  setGoal(){
    this.navCtrl.push(AddGoalPage);
  }

  getWeightGoals(){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    const weightGoals = [];
    firebase.database().ref('/' + userId + '/goals/weightGoals/').once('value').then(function(snapshot){
      snapshot.forEach((childSnapshot=>{
        if(childSnapshot.val().status == 'In Progress'){
          let name = childSnapshot.val().name; 
          var i = childSnapshot.val().dateAdded.indexOf('GMT');
          let dateAdded = childSnapshot.val().dateAdded.substring(0, i);
          let targetDate = childSnapshot.val().targetDate;
          let weightTarget = childSnapshot.val().weightTarget;
          weightGoals.push({
            name: name,
            dateAdded: dateAdded,
            targetDate: targetDate,
            weightTarget: weightTarget
          });
        }
      }))
    });
    return weightGoals;
  }

  getWorkoutGoals(){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    const workoutGoals = [];
    firebase.database().ref('/' + userId + '/goals/workoutGoals/').once('value').then(function(snapshot){
      snapshot.forEach((childSnapshot=>{
        if(childSnapshot.val().status == 'In Progress'){
          let name = childSnapshot.val().name; 
          var i = childSnapshot.val().dateAdded.indexOf('GMT');
         let dateAdded = childSnapshot.val().dateAdded.substring(0, i);
          let targetDate = childSnapshot.val().targetDate;
          let workoutTarget = childSnapshot.val().workoutTarget;
          workoutGoals.push({
            name: name,
            dateAdded: dateAdded,
            targetDate: targetDate,
            workoutTarget: workoutTarget
          });
        }
      }))
    });
    return workoutGoals;
  }

  getOtherGoals(){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    const otherGoals = [];
    firebase.database().ref('/' + userId + '/goals/otherGoals/').once('value').then(function(snapshot){
      snapshot.forEach((childSnapshot=>{
        if(childSnapshot.val().status == 'In Progress'){
          let name = childSnapshot.val().name; 
          var i = childSnapshot.val().dateAdded.indexOf('GMT');
          let dateAdded = childSnapshot.val().dateAdded.substring(0, i);
          let targetDate = childSnapshot.val().targetDate;
          let goalDescription = childSnapshot.val().goalDescription;
          otherGoals.push({
            name: name,
            dateAdded: dateAdded,
            targetDate: targetDate,
            goalDescription: goalDescription
          });
        }
      }))
    });
    return otherGoals;
  }

}
