import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientModule } from './patient/patient.module';
import { MedicationModule } from './medication/medication.module';
import { DoctorModule } from './doctor/doctor.module';
import { CaregiverModule } from './caregiver/caregiver.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PatientModule,
    MedicationModule,
    DoctorModule,
    CaregiverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
