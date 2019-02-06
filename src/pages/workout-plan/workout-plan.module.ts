import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutPlanPage } from './workout-plan';

@NgModule({
  declarations: [
    WorkoutPlanPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutPlanPage),
  ],
})
export class WorkoutPlanPageModule {}
