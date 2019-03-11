import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import chart js for charting. 
import { Chart } from 'chart.js';

import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-goal-graphed',
  templateUrl: 'goal-graphed.html',
})
export class GoalGraphedPage {

  	@ViewChild('barCanvas') barCanvas;
	@ViewChild('lineCanvas') lineCanvas;
	@ViewChild('doughnutCanvas') doughnutCanvas;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  weightGraphData = [];

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoalGraphedPage');
    
    this.weightGraphData = this.getWeightOverTime();

    setTimeout(() => {
    	this.generateLineChart(this.weightGraphData);
  	}, 1000);


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

	console.log(w);

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
   


  generateBarChart(){

  	this.barChart = new Chart(this.barCanvas.nativeElement, {

            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
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


  generateDoughnutChart(){
  	this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

            type: 'doughnut',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
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
