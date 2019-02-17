import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutHistoryPage } from './workout-history';

@NgModule({
  declarations: [
    WorkoutHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutHistoryPage),
  ],
})
export class WorkoutHistoryPageModule {}
