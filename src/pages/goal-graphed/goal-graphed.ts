import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import chart js for charting. 
import { Chart } from 'chart.js';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

//models 
import { FirebaseUserModel } from '../core/user.model';
import { HealthDetailsDataModel } from '../../app/models/HealthDetailsDataModel';
import { WorkoutStatsDataModel } from '../../app/models/WorkoutStatsDataModel';

@IonicPage()
@Component({
  selector: 'page-goal-graphed',
  templateUrl: 'goal-graphed.html',
})
export class GoalGraphedPage {

  @ViewChild('barCanvas') barCanvas;
	@ViewChild('lineCanvas') lineCanvas;
	@ViewChild('doughnutCanvas') doughnutCanvas;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,    
    public db: AngularFireDatabase) {
  }

  user: FirebaseUserModel = new FirebaseUserModel();
  userHealthDetail: HealthDetailsDataModel = new HealthDetailsDataModel();
  workoutStats: WorkoutStatsDataModel = new WorkoutStatsDataModel();


  weightGraphData = [];
  barChartData:any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalGraphedPage');
    
    this.weightGraphData = this.getWeightOverTime();
    this.barChartData = this.getWorkoutHistory();
    this.countWorkouts(this.workoutStats);

    setTimeout(() => {
      this.generateLineChart(this.weightGraphData);
      this.generateDoughnutChart(this.workoutStats);
      this.generateBarChart(this.barChartData);
  	}, 900);


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
   


 getWorkoutHistory(){
    const dec = 0;
    const jan = 0;
    const feb = 0;
    const mar = 0;
    const apr = 0;
    const may = 0;
    const barData = [];
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    firebase.database().ref('/' + userId + '/workoutHistory/').once('value').then(function(snapshot){
      //console.log(snapshot);
      snapshot.forEach((childSnapshot=>{
        var currentDate = childSnapshot.val().date;
        if(currentDate.includes('Dec')){
          dec++;
        }else if(currentDate.includes('Jan')){
          jan++;
        }else if(currentDate.includes('Feb')){
          feb++;
        }else if(currentDate.includes('Mar')){
          mar++;
        }else if(currentDate.includes('Apr')){
          apr++; 
        }else if(currentDate.includes('May')){
          may++;
        }
      }))
      barData.push({
        dec: dec,
        jan: jan,
        feb: feb, 
        mar: mar, 
        apr: apr, 
        may: may 
      })
    });
    return barData;

  }

  generateBarChart(data){
  
  this.barChart = new Chart(this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["Dec", "Jan", "Feb", "Mar", "Apr", "May"],
                datasets: [{
                    label: 'Amount of Workouts',
                    data: [data[0].dec, data[0].jan, data[0].feb, data[0].mar, data[0].apr, data[0].may],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });

    }

    countWorkouts(w){
      var user = firebase.auth().currentUser;
      var userId = user.uid;
      let count = 0;
      let workoutsToGo = 0;
      let progress = 0;
      firebase.database().ref('/' + userId + '/workoutHistory/').once('value').then(function(snapshot){
      w.countOfWorkout = snapshot.numChildren();
      count = snapshot.numChildren();
      if(count < 25){
        w.workoutLevel = 'Beginner';
        workoutsToGo = 25 - count;
        w.workoutsToNextLevel = workoutsToGo;
      }else if(count >=25 && count< 50){
        w.workoutLevel = 'Intermediate';
        workoutsToGo = 50 - count;
        w.workoutsToNextLevel = workoutsToGo;
      }else if(count >= 50 && count< 100){
        w.workoutLevel = 'Advanced';
        workoutsToGo = 100 - count;
        w.workoutsToNextLevel = workoutsToGo;
      }
    });
  }

  generateDoughnutChart(w){
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

            type: 'doughnut',
            data: {
                labels: ["Workouts Completed", "Workouts Needed to Level Up"],
                datasets: [{
                    label: '# of Votes',
                    data: [w.countOfWorkout, w.workoutsToNextLevel],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            }

        });
  }


   }
