import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddGoalPage } from '../add-goal/add-goal';
import * as firebase from 'firebase';

import { HealthDetailsDataModel } from '../../app/models/HealthDetailsDataModel';

//models
import { WorkoutStatsDataModel } from '../../app/models/WorkoutStatsDataModel';

@IonicPage()
@Component({
  selector: 'page-goals',
  templateUrl: 'goals.html',
})
export class GoalsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) 
  {}

  workoutStats: WorkoutStatsDataModel = new WorkoutStatsDataModel();
  userHealthDetail: HealthDetailsDataModel = new HealthDetailsDataModel();

  weightGoalData = []; workoutGoalData = []; otherGoalData = [];

  weightGoalDataCompleted = []; workoutGoalDataCompleted = []; otherGoalDataCompleted = [];

  weightGoalDataComplete = []; workoutGoalDataComplete = []; otherGoalDataComplete = [];

  currentWeight: any; currentWorkoutCount: any; 

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalsPage');

    this.weightGoalData = this.getWeightGoals();
    this.workoutGoalData = this.getWorkoutGoals();
    this.otherGoalData = this.getOtherGoals();

    this.workoutGoalDataComplete = this.getCompleteWorkoutGoals();
    this.weightGoalDataComplete = this.getCompleteWeightGoals();
    this.otherGoalDataComplete = this.getCompleteOtherGoals();

    this.getCurrentWorkoutCount(this.workoutStats);
    this.getWeight(this.userHealthDetail);

    this.autoCheckForCompleteWeightGoal();
  }


  reloadPage(){
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  getCurrentWorkoutCount(w){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    const count;
    firebase.database().ref('/' + userId + '/workoutHistory/').once('value').then(function(snapshot){
      count = snapshot.numChildren();
      console.log(count);    
      w.countOfWorkout = snapshot.numChildren();
    });
  }

  getWeight(userHealthDetail){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    firebase.database().ref('/' + userId + '/healthDetails/').once('value').then(function(snapshot){
      snapshot.forEach((childSnapshot => {
        userHealthDetail.weight = childSnapshot.val().weight;
      }));
    });
  }

  setGoal(){
    this.navCtrl.push(AddGoalPage);
  }

  getWeightGoals(){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    const weightGoals = [];
    const ref;
    firebase.database().ref('/' + userId + '/goals/weightGoals/').once('value').then(function(snapshot){
      snapshot.forEach((childSnapshot=>{
      ref = childSnapshot.key;
      if(childSnapshot.val().status == 'In Progress'){
        let name = childSnapshot.val().name; 
        let dateAdded = childSnapshot.val().dateAdded.substring(0, 15);
        let targetDate = childSnapshot.val().targetDate.substring(0, 15);
        let weightTarget = childSnapshot.val().weightTarget;
        weightGoals.push({
          name: name,
          dateAdded: dateAdded,
          targetDate: targetDate,
          weightTarget: weightTarget,
          directPath: ref
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
    const ref;
    firebase.database().ref('/' + userId + '/goals/workoutGoals/').once('value').then(function(snapshot){
      snapshot.forEach((childSnapshot=>{
        ref = childSnapshot.key;
        if(childSnapshot.val().status == 'In Progress'){
          let name = childSnapshot.val().name; 
          let dateAdded = childSnapshot.val().dateAdded.substring(0, 15);
          let targetDate = childSnapshot.val().targetDate.substring(0, 15);
          let workoutTarget = childSnapshot.val().workoutTarget;
          workoutGoals.push({
            name: name,
            dateAdded: dateAdded,
            targetDate: targetDate,
            workoutTarget: workoutTarget, 
            directPath: ref
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
    const ref;
    firebase.database().ref('/' + userId + '/goals/otherGoals/').once('value').then(function(snapshot){
      snapshot.forEach((childSnapshot=>{
        ref = childSnapshot.key;
        if(childSnapshot.val().status == 'In Progress'){
          let name = childSnapshot.val().name; 
          let dateAdded = childSnapshot.val().dateAdded.substring(0, 15);
          let targetDate = childSnapshot.val().targetDate;
          let goalDescription = childSnapshot.val().goalDescription;
          otherGoals.push({
            name: name,
            dateAdded: dateAdded,
            targetDate: targetDate,
            goalDescription: goalDescription,
            directPath: ref
          });
        }
      }))
    });
    return otherGoals;
  }

  getCompleteWorkoutGoals(){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    const workoutGoalsComplete = [];
    const ref;
    firebase.database().ref('/' + userId + '/goals/workoutGoals/').once('value').then(function(snapshot){
      snapshot.forEach((childSnapshot=>{
        ref = childSnapshot.key;
        if(childSnapshot.val().status == 'Complete'){
          let name = childSnapshot.val().name; 
          let dateAdded = childSnapshot.val().dateAdded.substring(0, 15);
          let targetDate = childSnapshot.val().targetDate.substring(0, 15);
          let goalDescription = childSnapshot.val().goalDescription;
          let dateAchieved = childSnapshot.val().dateAchieved.substring(0, 15);          
          workoutGoalsComplete.push({
            name: name,
            dateAdded: dateAdded,
            targetDate: targetDate,
            goalDescription: goalDescription,
            directPath: ref, 
            dateAchieved: dateAchieved
          });
        }
      }))
    });
    return workoutGoalsComplete;  
  }

  getCompleteWeightGoals(){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    const weightGoalsComplete = [];
    const ref;
    firebase.database().ref('/' + userId + '/goals/weightGoals/').once('value').then(function(snapshot){
      snapshot.forEach((childSnapshot=>{
        ref = childSnapshot.key;
        if(childSnapshot.val().status == 'Complete'){
          let name = childSnapshot.val().name; 
          let dateAdded = childSnapshot.val().dateAdded.substring(0, 15);
          let targetDate = childSnapshot.val().targetDate.substring(0, 15);
          let goalDescription = childSnapshot.val().goalDescription;
          let dateAchieved = childSnapshot.val().dateAchieved.substring(0, 15);
          weightGoalsComplete.push({
            name: name,
            dateAdded: dateAdded,
            targetDate: targetDate,
            goalDescription: goalDescription,
            directPath: ref, 
            dateAchieved: dateAchieved
          });
        }
      }))
    });
    return weightGoalsComplete;  
  }

  getCompleteOtherGoals(){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    const otherGoalsComplete = [];
    const ref;
    firebase.database().ref('/' + userId + '/goals/otherGoals/').once('value').then(function(snapshot){
      snapshot.forEach((childSnapshot=>{
        ref = childSnapshot.key;
        if(childSnapshot.val().status == 'Complete'){
          let name = childSnapshot.val().name; 
          let dateAdded = childSnapshot.val().dateAdded.substring(0, 15);
          let targetDate = childSnapshot.val().targetDate.substring(0,15);
          let goalDescription = childSnapshot.val().goalDescription;
          let dateAchieved = childSnapshot.val().dateAchieved.substring(0, x);      
          otherGoalsComplete.push({
            name: name,
            dateAdded: dateAdded,
            targetDate: targetDate,
            goalDescription: goalDescription,
            directPath: ref, 
            dateAchieved: dateAchieved
          });
        }
      }))
    });
    return otherGoalsComplete;  
  }

  markWeightGoalComplete(snapshot){
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/' + userId + '/goals/weightGoals/' + snapshot + '/').update({status: 'Complete', dateAchieved: Date()});
    this.reloadPage();
  }

  markWorkoutGoalComplete(snapshot){
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/' + userId + '/goals/workoutGoals/' + snapshot + '/').update({status: 'Complete', dateAchieved: Date()});
    this.reloadPage();
  }

  markOtherGoalComplete(snapshot){
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/' + userId + '/goals/otherGoals/' + snapshot + '/').update({status: 'Complete', dateAchieved: Date()});
    this.reloadPage();
  }


  deleteWeightGoal(path){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    firebase.database().ref('/' + userId + '/goals/weightGoals/' + path).remove();
    this.reloadPage();
  }

  deleteWorkoutGoal(path){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    firebase.database().ref('/' + userId + '/goals/workoutGoals/' + path).remove();
    this.reloadPage();
  }

  deleteOtherGoal(path){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    firebase.database().ref('/' + userId + '/goals/otherGoals/' + path).remove();
    this.reloadPage();
  }

  autoCheckForCompleteWeightGoal(w){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    //initialise vars.
    const ref;
    const currentWeight;
    //get weight target goal
    firebase.database().ref('/' + userId + '/goals/weightGoals/').once('value').then(function(snapshot){
      snapshot.forEach((childSnapshot=>{
      ref = childSnapshot.key;
      if(childSnapshot.val().status == 'In Progress'){
        let weightTarget = childSnapshot.val().weightTarget;
        //get current weight. 
        firebase.database().ref('/' + userId + '/healthDetails/').once('value').then(function(snapshot){
          snapshot.forEach((childSnapshot => {
            currentWeight = childSnapshot.val().weight;
            if(currentWeight == weightTarget){
              //target weight and current weight match, so goal is complete!. 
              firebase.database().ref('/' + userId + '/goals/weightGoals/' + ref + '/').update({status: 'Complete', dateAchieved: Date()});
             // this.reloadPage();
            }
          }));
        });
      }
    }))
    });
  }
}
