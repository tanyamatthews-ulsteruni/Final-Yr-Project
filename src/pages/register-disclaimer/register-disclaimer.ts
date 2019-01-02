import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register-disclaimer',
  templateUrl: 'register-disclaimer.html',
})
export class RegisterDisclaimerPage {

  public accept: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterDisclaimerPage');
  }

  public completeRegistration(){
  	const accepted = this.accept;
  	if(accepted){
  		this.navCtrl.push('OnboardingPage');
  	}
  }

}
