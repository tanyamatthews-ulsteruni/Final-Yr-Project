import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { UserService } from '../core/user.service';
import { AuthService } from '../core/auth.service';
import { FirebaseUserModel } from '../core/user.model';
import * as firebase from 'firebase';

//importing chart js. 
import { Chart } from 'chart.js';

//models 
import { HealthDetailsDataModel } from '../../app/models/HealthDetailsDataModel';
import { WorkoutStatsDataModel } from '../../app/models/WorkoutStatsDataModel';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  user: FirebaseUserModel = new FirebaseUserModel();
  userHealthDetail: HealthDetailsDataModel = new HealthDetailsDataModel();
  workoutStats: WorkoutStatsDataModel = new WorkoutStatsDataModel();

  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;

  constructor(
    public navCtrl: NavController,
    public userService: UserService,
    public authService: AuthService,
    private alertCtrl: AlertController
  ) {
  }

  weightGraphData = [];

  ionViewWillLoad(){
    this.calculateBMI(this.userHealthDetail);
    this.userService.getCurrentUser()
    .then(user => {
      this.user = user;
    }, err => console.log(err))


    this.countWorkouts(this.workoutStats);
    this.getLastWorkout(this.workoutStats);

    this.weightGraphData = this.getWeightOverTime();

    setTimeout(() => {
      this.generateLineChart(this.weightGraphData);
    }, 1500);
  }

  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.navCtrl.pop();
    }, (error) => {
      console.log("Logout error", error);
    });
  }

  calculateBMI(userHealthDetail){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    firebase.database().ref('/' + userId + '/healthDetails/').once('value').then(function(snapshot){
      snapshot.forEach((childSnapshot => {
        userHealthDetail.weight = childSnapshot.val().weight;
        userHealthDetail.height = childSnapshot.val().height; 
        // if height and weight populated, calculate BMI.
        if(userHealthDetail.weight != null || userHealthDetail.height != null){
          var heightInMeters = parseInt(userHealthDetail.height) / 100;
          var heightSq = heightInMeters * heightInMeters;
          //set bmi value and round to 2 decimal places. 
          userHealthDetail.bmi = Number(parseInt(userHealthDetail.weight) / heightSq).toFixed(2);
          var bmi = userHealthDetail.bmi;
          if(bmi < 18.5){
            userHealthDetail.bmiDescription = "Underweight";
          }else if(bmi > 18.5 && bmi <25){
            userHealthDetail.bmiDescription = "Normal range";
          }else if(bmi >= 25){
            userHealthDetail.bmiDescription = "Overweight";
          }
        }
        
      }));
    });
  }


   countWorkouts(w){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    let count = 0;
    let workoutsToGo = 0;
    firebase.database().ref('/' + userId + '/workoutHistory/').once('value').then(function(snapshot){
      w.countOfWorkout = snapshot.numChildren();
      count = snapshot.numChildren();
      
      if(count < 25){
        w.workoutLevel = 'Beginner';
        workoutsToGo = 25 - count;
        w.workoutsToNextLevel = workoutsToGo;
      }else if(count >25 && count< 50){
        w.workoutLevel = 'Intermediate';
        workoutsToGo = 50 - count;
        w.workoutsToNextLevel = workoutsToGo;
      }else if(count > 50 && count< 100){
        w.workoutLevel = 'Advanced';
        workoutsToGo = 100 - count;
        w.workoutsToNextLevel = workoutsToGo;
      }

    });
  }

  getLastWorkout(w){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    firebase.database().ref('/' + userId + '/workoutHistory/').limitToLast(1).once('value').then(function(snapshot){
      console.log(snapshot);
      snapshot.forEach((childSnapshot=>{
        var i = childSnapshot.val().date.indexOf('GMT');

        w.lastWorkoutDay = childSnapshot.val().date.substring(0, i);
        w.lastWorkoutName = childSnapshot.val().name;
      }))
    });
  }

  getWeightOverTime(){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    const healthDetails = [];
    firebase.database().ref('/' + userId + '/historicHealthDetails/').once('value').then(function(snapshot){
      snapshot.forEach((childSnapshot=>{
        let date = childSnapshot.val().date; 
        let weight = childSnapshot.val().weight;
        healthDetails.push({
          date: date,
          weight: weight
        });
    }))
    });
    return healthDetails;

    //this.generateLineChart(healthDetails);
  }

  generateLineChart(w){

  const labels = [];
  const weight = [];

  for (let i in w) {
      labels.push(w[i].date.substring(0, 15));
      weight.push(w[i].weight);
  }


    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Weight (kg)",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: weight,//[65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false,
                    }
                ]
            }

        });

    }


}