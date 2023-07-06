import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPacienteComponent } from './paciente/cadastro-paciente/cadastro-paciente.component';
import { ListarPacienteComponent } from './paciente/listar-paciente/listar-paciente.component';
import { CadastroMedicoComponent } from './medico/cadastro-medico/cadastro-medico.component';
import { ListarMedicoComponent } from './medico/listar-medico/listar-medico.component';

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
  },
  {
    path: 'cadastromedico',
    component: CadastroMedicoComponent
  },
  {
    path: 'editamedico/:id',
    component: CadastroMedicoComponent
  },
  {
    path: 'listagemmedicos',
    component: ListarMedicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
