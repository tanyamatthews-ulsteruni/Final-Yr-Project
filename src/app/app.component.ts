import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//page imports
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { WorkoutsPage } from '../pages/workouts/workouts';
import { WorkoutPlanPage } from '../pages/workout-plan/workout-plan';
import { ExerciseListPage } from '../pages/exercise-list/exercise-list';
import { WorkoutHistoryPage } from '../pages/workout-history/workout-history';

import { AuthService } from '../pages/core/auth.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;
  	rootPage:any = LoginPage;

  	pages: Array <{title: string, component: any}>;

	 constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public auth: AuthService//,
    //public navCtrl: NavController
    ) {

    	platform.ready().then(() => {
    		statusBar.styleDefault();
        	splashScreen.hide();
    	});

		this.pages = [
    		{title: 'Home', component: HomePage},
  			{title: 'Profile', component: ProfilePage},
        {title: 'Exercise List', component: ExerciseListPage},
        {title: 'Workouts', component: WorkoutsPage},
        {title: 'Workout History', component: WorkoutHistoryPage},
        {title: 'Workout Plan', component: WorkoutPlanPage}
		];

	}
  	
  openPage(page) {
    // Reset the content nav to have just this page
    this.nav.setRoot(page.component);
  }

  logout(){
    this.auth.doLogout().then(res => {
      this.nav.setRoot(LoginPage);
    }, err => {
      console.log(err);
      
    })
  }

}
