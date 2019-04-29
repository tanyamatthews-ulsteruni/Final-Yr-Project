import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { UserService } from '../core/user.service';
import { AuthService } from '../core/auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

//importing chart js. 
import { Chart } from 'chart.js';

//models 
import { FirebaseUserModel } from '../core/user.model';
import { HealthDetailsDataModel } from '../../app/models/HealthDetailsDataModel';
import { WorkoutStatsDataModel } from '../../app/models/WorkoutStatsDataModel';
import { GoalStatsDataModel } from '../../app/models/GoalStatsDataModel';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  user: FirebaseUserModel = new FirebaseUserModel();
  userHealthDetail: HealthDetailsDataModel = new HealthDetailsDataModel();
  workoutStats: WorkoutStatsDataModel = new WorkoutStatsDataModel();
  goalStats: GoalStatsDataModel = new GoalStatsDataModel();

  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('barCanvas') barCanvas;

  doughnutChart: any;
  lineChart: any;
  barChart: any;
  stars: any;
  
  updatedProfile: boolean = true;

  constructor(
    public navCtrl: NavController,
    public userService: UserService,
    public authService: AuthService,
    private alertCtrl: AlertController,    
    public db: AngularFireDatabase
  ) {
  }

  weightGraphData = [];
  barChartData:any;

  ionViewDidEnter(){
    this.calculateBMI(this.userHealthDetail);
    this.userService.getCurrentUser()
    .then(user => { 
      this.user = user;
    }, err => console.log(err))

    this.countWorkouts(this.workoutStats);

    this.weightGraphData = this.getWeightOverTime();
    this.barChartData = this.getWorkoutHistory();

    setTimeout(() => {
      this.generateLineChart(this.weightGraphData);
      this.generateDoughnutChart(this.workoutStats);
      this.generateBarChart(this.barChartData);
    }, 700);

    this.getLastWorkout(this.workoutStats);
    this.calculateBMR(this.userHealthDetail);

    this.checkForBadges(this.goalStats);

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

  calculateBMR(userHealthDetail){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    const bmr; 
    firebase.database().ref('/' + userId + '/healthDetails/').once('value').then(function(snapshot){
      snapshot.forEach((childSnapshot => {
        userHealthDetail.weight = childSnapshot.val().weight;
        userHealthDetail.height = childSnapshot.val().height;
        userHealthDetail.age = childSnapshot.val().age;
        userHealthDetail.activityLevel = childSnapshot.val().activityLevel;
        bmr = (10 * userHealthDetail.weight) + (6.25 * userHealthDetail.height) - (5 * userHealthDetail.age) + 5;
        bmr = bmr * userHealthDetail.activityLevel;
        userHealthDetail.bmr = Math.round(bmr);
      }))
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

  getLastWorkout(w){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    firebase.database().ref('/' + userId + '/workoutHistory/').limitToLast(1).once('value').then(function(snapshot){
      snapshot.forEach((childSnapshot=>{
        w.lastWorkoutDay = childSnapshot.val().date.substring(0, 15);
        w.lastWorkoutName = childSnapshot.val().name;
        w.lastWorkoutId = childSnapshot.val().id;
      }))
    });
  }

  //chart historic weight data to show progress 
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
  }

  generateLineChart(w){
    const labels = []; const weight = [];

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
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB"
                    ]
                }]
            }

        });
  }

  logLastWorkout(w){
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    this.db.list(userId + '/workoutHistory/').push({date: Date(), id: w.lastWorkoutId, name: w.lastWorkoutName});

    let alert = this.alertCtrl.create({
      title: "Workout logged",
      subTitle: "Great news on completing another workout, keep up the brilliant work!",
      buttons: ['OK']
    });
    alert.present();

    //update pie chart 
    this.generateDoughnutChart(w);

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
      snapshot.forEach((childSnapshot=>{
        var currentDate = childSnapshot.val().date;
        if(currentDate.includes('Dec')){
          dec = dec +1;
        }else if(currentDate.includes('Jan')){
          jan = jan + 1;
        }else if(currentDate.includes('Feb')){
          feb = feb +1;
        }else if(currentDate.includes('Mar')){
          mar = mar + 1;
        }else if(currentDate.includes('Apr')){
          apr = apr + 1; 
        }else if(currentDate.includes('May')){
          may = may + 1;
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

    checkForBadges(g){
      //check goal count. 
      var user = firebase.auth().currentUser;
        var userId = user.uid;
        firebase.database().ref('/' + userId + '/goals/otherGoals').once('value').then(function(snapshot){
          console.log(snapshot);
          snapshot.forEach((childSnapshot=>{
          if(childSnapshot.val().status == 'Complete'){
            g.countOfGoals++;
          }
        
        }))
        });

        firebase.database().ref('/' + userId + '/goals/weightGoals').once('value').then(function(snapshot){
          console.log(snapshot);
          snapshot.forEach((childSnapshot=>{
          if(childSnapshot.val().status == 'Complete'){
            g.countOfGoals++;
          }
        
        }))
        });

        firebase.database().ref('/' + userId + '/goals/workoutGoals').once('value').then(function(snapshot){
          console.log(snapshot);
          snapshot.forEach((childSnapshot=>{
          if(childSnapshot.val().status == 'Complete'){
            g.countOfGoals++;
            console.log(snapshot);
          }
        
        }))
        });
        console.log("GOALS = " + g.countOfGoals);

      }



        

}