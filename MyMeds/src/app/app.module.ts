import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {LayoutModule} from './layout/layout.module';
import {PacienteModule} from './paciente/paciente.module';
import { MedicoModule } from './medico/medico.module';
import {HttpClientModule} from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { FirestoreModule } from './firestore/firestore.module';
import { MensagemService } from './shared/services/mensagem.service';
import { IMensagem } from './shared/modelo/IMensagem';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomePageComponent } from './home-page/home-page.component';
import { PipesModule } from './pipes/pipes.module';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    HttpClientModule,
    MatListModule,
    FirestoreModule,
    MatSnackBarModule,
    MedicoModule,
    PacienteModule,
    LayoutModule,
    PipesModule,
  ],
  providers: [
    {
    provide: IMensagem,
    useClass: MensagemService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }