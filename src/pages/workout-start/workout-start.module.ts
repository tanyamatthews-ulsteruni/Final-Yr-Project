import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutStartPage } from './workout-start';

@NgModule({
  declarations: [
    WorkoutStartPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutStartPage),
  ],
})
export class WorkoutStartPageModule {}
