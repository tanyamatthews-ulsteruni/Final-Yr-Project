import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateWorkoutDetailsPage } from './update-workout-details';

@NgModule({
  declarations: [
    UpdateWorkoutDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateWorkoutDetailsPage),
  ],
})
export class UpdateWorkoutDetailsPageModule {}
