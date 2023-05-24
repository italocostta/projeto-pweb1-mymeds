import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPacienteComponent } from './listar-paciente/listar-paciente.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    ListarPacienteComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: []
})
export class PacienteModule { }
