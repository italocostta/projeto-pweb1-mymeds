import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent } from './history/history.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    ProfileComponent,
    HistoryComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProfileComponent,
    HistoryComponent,
    DashboardComponent
  ]
})
export class PatientModule { }
