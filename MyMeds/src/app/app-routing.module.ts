import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPacienteComponent } from './paciente/cadastro-paciente/cadastro-paciente.component';
import { ListarPacienteComponent } from './paciente/listar-paciente/listar-paciente.component';
import { HomePageComponent } from './home-page/home-page.component';
import { pageTransitionAnimation } from './animations/page-trasition.animation';

const routes: Routes = [
  {
    path: 'cadastropaciente',
    component: CadastroPacienteComponent,
    data: { animation: 'CadastroPage' }
  },
  {
    path: 'editapaciente/:id',
    component: CadastroPacienteComponent,
    data: { animation: 'CadastroPage' }
  },
  {
    path: 'listagempacientes',
    component: ListarPacienteComponent,
    data: { animation: 'ListagemPage' }
  },
  {
    path: '',
    component: HomePageComponent,
    data: { animation: 'HomePage' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
