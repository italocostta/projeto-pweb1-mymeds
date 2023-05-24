import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPacienteComponent } from './paciente/cadastro-paciente/cadastro-paciente.component';
import { ListarPacienteComponent } from './paciente/listar-paciente/listar-paciente.component';

const routes: Routes = [
  {
    path: 'cadastropaciente',
    component: CadastroPacienteComponent
  },
  {
    path: 'editapaciente/:id',
    component: CadastroPacienteComponent
  },
  {
    path: 'listagempacientes',
    component: ListarPacienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
