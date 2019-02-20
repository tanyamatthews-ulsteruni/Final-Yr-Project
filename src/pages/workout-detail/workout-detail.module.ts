import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutDetailPage } from './workout-detail';

@NgModule({
  declarations: [
    WorkoutDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutDetailPage),
  ],
})
export class WorkoutDetailPageModule {}
