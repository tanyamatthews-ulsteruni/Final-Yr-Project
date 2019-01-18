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

  changeDetails(){
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/' + userId + '/healthDetails/').once('value').then(function(snapshot){
      console.log(snapshot);
        snapshot.forEach((childSnapshot => {
          console.log('/' + userId + '/healthDetails/' + childSnapshot.key);
          firebase.database().ref('/' + userId + '/healthDetails/' + childSnapshot.key).update({activityLevel: 'test', age: '90'});//, age: this.age, height: this.height ,  weight: this.weight});
        }));
      })
  }


  update(){
    this.changeDetails();
  	
  	//return to previous page 
  	this.navCtrl.pop();
  }

}
