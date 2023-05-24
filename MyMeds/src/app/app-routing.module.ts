import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastroUsuarioComponent} from './paciente/cadastro-usuario/cadastro-usuario.component';
import { ListarPacienteComponent } from './paciente/listar-paciente/listar-paciente.component';

const routes: Routes = [
  {
    path: 'cadastrousuario',
    component: CadastroUsuarioComponent
  },
  {
    path: 'editausuario/:id',
    component: CadastroUsuarioComponent
  },
  {
    path: 'listagemusuarios',
    component: ListarPacienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }