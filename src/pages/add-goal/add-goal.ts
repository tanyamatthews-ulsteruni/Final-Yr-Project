import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-add-goal',
  templateUrl: 'add-goal.html',
})
export class AddGoalPage {

  weightGoals: boolean = false;
  amountOfWorkoutsGoals: boolean = false;
  otherGoals: boolean = false;

  goalName; goalType; gtAmountOfWorkoutsVal; gtWeightVal; gtOtherVal; targetDate;


  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
    public db: AngularFireDatabase) 
  {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddGoalPage');
  }

  showHideFurtherGoalInput(goalType){
  	if(goalType == 'gtAmountOfWorkouts'){
  		this.amountOfWorkoutsGoals = true;
  		this.weightGoals = false;
  		this.otherGoals = false;
  	}else if(goalType == 'gtWeight'){
  		this.weightGoals = true;
  		this.otherGoals = false;
  		this.amountOfWorkoutsGoals = false;
  	}else if(goalType == 'gtOther'){
  		this.otherGoals = true;
  		this.amountOfWorkoutsGoals = false;
  		this.weightGoals = false;
  	}
  }

  addGoal(){
 	var userId = firebase.auth().currentUser.uid;
  const status = 'In Progress';
  const dateAchieved = 'N/A';
  const targetDateFormatted = new Date(this.targetDate).toString();

	if(this.amountOfWorkoutsGoals){
		this.db.list(userId + '/goals/workoutGoals/').push({dateAdded: Date(), name: this.goalName, workoutTarget: this.gtAmountOfWorkoutsVal, targetDate: targetDateFormatted, status: status, dateAchieved: dateAchieved});
	}else if(this.weightGoals){
		this.db.list(userId + '/goals/weightGoals/').push({dateAdded: Date(), name: this.goalName, weightTarget: this.gtWeightVal, targetDate: targetDateFormatted, status: status, dateAchieved: dateAchieved});
	}else if(this.otherGoals){
		this.db.list(userId + '/goals/otherGoals/').push({dateAdded: Date(), name: this.goalName, goalDescription: this.gtOtherVal, targetDate: targetDateFormatted, status: status, dateAchieved: dateAchieved});
	}
	this.navCtrl.pop();
//  this.reloadPage();
  }

}