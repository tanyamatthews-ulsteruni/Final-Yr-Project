import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
// db imports
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-update-health-details',
  templateUrl: 'update-health-details.html',
})
export class UpdateHealthDetailsPage {


  constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		public db: AngularFireDatabase
	) 
  {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateHealthDetailsPage');
  }

  //TODO NEED TO UPDATE ACITIVITY LEVEL 
  // **** NEEDS UPDATED
  changeDetails(age, weight, height){
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/' + userId + '/healthDetails/').once('value').then(function(snapshot){

    snapshot.forEach((childSnapshot => {
        console.log('/' + userId + '/healthDetails/' + childSnapshot.key);
        firebase.database().ref('/' + userId + '/healthDetails/' + childSnapshot.key).update({age: age, height: height, weight: weight});//, age: this.age, height: this.height ,  weight: this.weight});
      }));
    })

    firebase.database().ref('/' + userId + '/historicHealthDetails/').push({age: age, height: height, weight: weight, date: Date()});

    //return to previous page 
    this.navCtrl.pop();
  }


}
