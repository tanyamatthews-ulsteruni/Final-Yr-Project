import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-password-reset',
  templateUrl: 'password-reset.html',
})
export class PasswordResetPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    public db: AngularFireDatabase,
    private alertCtrl: AlertController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordResetPage');
  }

  sendPasswordLink(userEmail){
    //push users email to firebase path for users who need reset password.
  	this.db.list('userNeedPasswordReset/').push({email: userEmail});
    //create alert format.
  	let alert = this.alertCtrl.create({
      title: "Password reset link sent",
      subTitle: "Please check your emails for details on how to reset your password. Please allow some time for this action.",
      buttons: ['OK']
    });
    alert.present();
  	this.navCtrl.pop();
  }

}
