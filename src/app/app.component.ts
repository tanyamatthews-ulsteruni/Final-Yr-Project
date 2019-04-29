import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

//page imports
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { WorkoutsPage } from '../pages/workouts/workouts';
import { WorkoutPlanPage } from '../pages/workout-plan/workout-plan';
import { ExerciseListPage } from '../pages/exercise-list/exercise-list';
import { WorkoutHistoryPage } from '../pages/workout-history/workout-history';
import { GoalsPage } from '../pages/goals/goals';
import { GoalGraphedPage } from '../pages/goal-graphed/goal-graphed';
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
        setTimeout(()=>{
        statusBar.backgroundColorByHexString("#6279AE");
        }, 40000);
    	});

		this.pages = [
    		{title: 'Home', component: HomePage},
  			{title: 'Profile', component: ProfilePage},
        {title: 'Workout Plan', component: WorkoutPlanPage},
        {title: 'All Workouts', component: WorkoutsPage},
        {title: 'Workout History', component: WorkoutHistoryPage},
        {title: 'Exercise List', component: ExerciseListPage},
        {title: 'Goals', component: GoalsPage},
        {title: 'Progress', component: GoalGraphedPage}
        ]
	}
  	
  openPage(page) {
    //surface the passed in page when clicked. 
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
