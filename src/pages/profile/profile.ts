import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../core/user.service';
import { AuthService } from '../core/auth.service';
import { FirebaseUserModel } from '../core/user.model';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    public userService: UserService,
    public authService: AuthService
  ) {}

  user: FirebaseUserModel = new FirebaseUserModel();

  ionViewWillLoad(){
    this.userService.getCurrentUser()
    .then(user => {
      this.user = user;
      console.log(user.name);
    }, err => console.log(err))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
