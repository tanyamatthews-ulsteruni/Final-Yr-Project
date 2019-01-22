import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateUserDetailsPage } from './update-user-details';

@NgModule({
  declarations: [
    UpdateUserDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateUserDetailsPage),
  ],
})
export class UpdateUserDetailsPageModule {}
