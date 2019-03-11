import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { FormsModule }   from '@angular/forms';

//page imports 
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { RegisterDisclaimerPage } from '../pages/register-disclaimer/register-disclaimer';
import { ProfilePage } from '../pages/profile/profile';
import { UpdateHealthDetailsPage } from '../pages/update-health-details/update-health-details';
import { UpdateReminderDetailsPage } from '../pages/update-reminder-details/update-reminder-details';
import { UpdateWorkoutDetailsPage } from '../pages/update-workout-details/update-workout-details';
import { ExerciseListPage } from '../pages/exercise-list/exercise-list';
import { ExerciseDetailPage } from '../pages/exercise-detail/exercise-detail';
import { WorkoutPlanPage } from '../pages/workout-plan/workout-plan';
import { WorkoutsPage } from '../pages/workouts/workouts';
import { WorkoutDetailPage } from '../pages/workout-detail/workout-detail';
import { WorkoutStartPage } from '../pages/workout-start/workout-start';
import { WorkoutHistoryPage } from '../pages/workout-history/workout-history';
import { AddGoalPage } from '../pages/add-goal/add-goal';
import { GoalsPage } from '../pages/goals/goals';
import { GoalGraphedPage } from '../pages/goal-graphed/goal-graphed';
//service imports
import { AuthService } from '../pages/core/auth.service';
import { UserService } from '../pages/core/user.service';
//modular imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environment/environment';
//imports for alternative login using facebook etc. 
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { TwitterConnect } from '@ionic-native/twitter-connect';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    RegisterPage,
    RegisterDisclaimerPage,
    ProfilePage,
    UpdateReminderDetailsPage, 
    UpdateWorkoutDetailsPage,
    UpdateHealthDetailsPage,
    ExerciseListPage,
    ExerciseDetailPage,
    WorkoutsPage,
    WorkoutPlanPage,
    WorkoutDetailPage,
    WorkoutStartPage,
    WorkoutHistoryPage,
    GoalsPage,
    AddGoalPage,
    GoalGraphedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    RegisterPage,
    RegisterDisclaimerPage,
    ProfilePage,
    UpdateReminderDetailsPage, 
    UpdateWorkoutDetailsPage,
    UpdateHealthDetailsPage,
    ExerciseListPage,
    ExerciseDetailPage,
    WorkoutsPage,
    WorkoutPlanPage,
    WorkoutDetailPage,
    WorkoutStartPage,
    WorkoutHistoryPage,
    GoalsPage,
    AddGoalPage,
    GoalGraphedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    GooglePlus,
    AuthService,
    TwitterConnect,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
