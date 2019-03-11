import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// db imports
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-update-reminder-details',
  templateUrl: 'update-reminder-details.html',
})
export class UpdateReminderDetailsPage {

  constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		public db: AngularFireDatabase) 
  {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateReminderDetailsPage');
  }

  update(remindersEnabled, reminderFrequency, reminderTime){

  	if(!remindersEnabled){
  		remindersEnabled = false;
  	}
  	if(!reminderFrequency){
  		reminderFrequency = "";
  	}

  	if(!reminderTime){
  		reminderTime = "";
  	}

    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/' + userId + '/reminderPreferences/').once('value').then(function(snapshot){

     snapshot.forEach((childSnapshot => {
        console.log('/' + userId + '/reminderPreferences/' + childSnapshot.key);
        firebase.database().ref('/' + userId + '/reminderPreferences/' + childSnapshot.key).update({enableReminders: remindersEnabled, frequency: reminderFrequency, time: reminderTime});//, age: this.age, height: this.height ,  weight: this.weight});
      }));

    })

    //return to previous page 
    this.navCtrl.pop();
 
  }

}
