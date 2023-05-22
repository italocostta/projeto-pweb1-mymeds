import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ReminderComponent } from './reminder/reminder.component';
import { RefillComponent } from './refill/refill.component';



@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    ReminderComponent,
    RefillComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    AddComponent,
    ReminderComponent,
    RefillComponent
  ]
})
export class MedicationModule { }
