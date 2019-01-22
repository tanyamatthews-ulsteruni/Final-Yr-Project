import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// db imports
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-update-user-details',
  templateUrl: 'update-user-details.html',
})
export class UpdateUserDetailsPage {

  constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		public db: AngularFireDatabase
	) 
  {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateUserDetailsPage');
  }

  update(fullname, email){
  	var user = firebase.auth().currentUser;
  	user.updateProfile({
  		displayName: fullname,
  		photoURL: "https://example.com/jane-q-user/profile.jpg"
	}).then(function() {
  		// Update successful.
	}).catch(function(error) {
  		// An error happened.
	});
    //return to previous page 
    this.navCtrl.pop();
  }
}
