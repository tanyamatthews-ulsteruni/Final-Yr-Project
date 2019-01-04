import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';


import { ListPage } from '../pages/list/list';
//import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

//firebase config details
const config = {
    apiKey: "AIzaSyBP0X8X4o8dvCCUabEGpaE9deU2l0OYZr8",
    authDomain: "fit2me.firebaseapp.com",
    databaseURL: "https://fit2me.firebaseio.com",
    projectId: "fit2me",
    storageBucket: "fit2me.appspot.com",
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  @ViewChild(Nav) nav: Nav;

  rootPage:any = 'LoginPage';

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    //needed for firebase connectivity
    firebase.initializeApp(config);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
