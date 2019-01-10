import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../core/user.service';
import { FirebaseUserModel } from '../core/user.model';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user: FirebaseUserModel = new FirebaseUserModel();
  userHealthDetails: any[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public userService: UserService
  ) {
    
  }

  ionViewWillLoad(){
    this.userService.getCurrentUser()
    .then(user => {
      this.user = user;
      console.log(user);
    }, err => console.log(err))
    
    this.getProfileDetails();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');


  }

  getProfileDetails(){
    var user = firebase.auth().currentUser;
    var userId = 'Gm38qeLek9NtUDoQBXKoN0Au4Ic2';//user.uid;
    firebase.database().ref('/' + userId + '/healthDetails/').once('value').then(function(snapshot){
      snapshot.forEach((childSnapshot => {
      console.log(childSnapshot.val().age);
    }));
    });

    /*console.log(userId);
    if(!this.userId){
      var firebaseUrl = '/' + userId + '/healthDetails/';
      console.log(firebaseUrl);
      const ref: firebase.database.Reference = firebase.database().ref('/Gm38qeLek9NtUDoQBXKoN0Au4Ic2/healthDetails/');
      ref.on('value', healthDetailSnapshot => {
        this.userHealthDetails = healthDetailSnapshot.val();
        console.log(healthDetailSnapshot.val());
        console.log('Details: ' + healthDetailSnapshot.val());
      });
    }
    */

  } 


}
