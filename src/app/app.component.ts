import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//page imports
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;
  	rootPage:any = LoginPage;

  	pages: Array <{title: string, component: any}>;

	constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    	platform.ready().then(() => {
    		statusBar.styleDefault();
        	splashScreen.hide();
    	});

		this.pages = [
    		{title: 'Home', component: HomePage},
  			{title: 'Profile', component: ProfilePage},
  			{title: 'List', component: ListPage}
		];

	}
  	
  openPage(page) {
    // Reset the content nav to have just this page
    this.nav.setRoot(page.component);
  }

}
