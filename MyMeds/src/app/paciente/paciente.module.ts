import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPacienteComponent } from './listar-paciente/listar-paciente.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CadastroPacienteComponent } from './cadastro-paciente/cadastro-paciente.component';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    ListarPacienteComponent,
    CadastroPacienteComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    FlexModule,
    RouterLink,
    MatSelectModule
  ],
  exports: [ListarPacienteComponent,CadastroPacienteComponent ]
})
export class PacienteModule { }
