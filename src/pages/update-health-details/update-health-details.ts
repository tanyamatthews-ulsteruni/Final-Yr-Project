import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';


@IonicPage()
@Component({
  selector: 'page-update-health-details',
  templateUrl: 'update-health-details.html',
})
export class UpdateHealthDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateHealthDetailsPage');
  }

  update(){
  	
  	this.navCtrl.push(ProfilePage);
  }

}
