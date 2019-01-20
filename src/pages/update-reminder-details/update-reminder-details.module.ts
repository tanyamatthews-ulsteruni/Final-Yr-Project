import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateReminderDetailsPage } from './update-reminder-details';

@NgModule({
  declarations: [
    UpdateReminderDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateReminderDetailsPage),
  ],
})
export class UpdateReminderDetailsPageModule {}
