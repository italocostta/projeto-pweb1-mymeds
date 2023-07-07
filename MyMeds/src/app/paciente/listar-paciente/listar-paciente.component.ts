import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/shared/modelo/paciente';
import { PacienteService } from 'src/app/shared/services/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteFirestoreService } from 'src/app/shared/services/paciente-firestore.service';
import { pageTransitionAnimation } from 'src/app/animations/page-transition.animation';

@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.scss'],
  animations: [pageTransitionAnimation],
})
export class ListarPacienteComponent implements OnInit {
  pacientes: Paciente[] = [];
  pacientesMaioresIdade = false;
  animationName: string = 'ListarPaciente';

  constructor(private route: ActivatedRoute, private PacienteService: PacienteService) {}

  ngOnInit(): void {
    this.obterPacientes();
    this.animationName = this.route.snapshot.data['animation'];
  }

  obterPacientes(): void {
    this.PacienteService.listar().subscribe(
      (pacientesRetornados) => {
        this.pacientes = pacientesRetornados;
        console.log(this.pacientes);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  excluir(pacienteARemover: Paciente): void {
    if (pacienteARemover.id) {
      this.PacienteService.apagar(pacienteARemover.id).subscribe(() => {
        const index = this.pacientes.findIndex(
          (paciente) => paciente.id === pacienteARemover.id
        );
        if (index !== -1) {
          this.pacientes.splice(index, 1);
        }
      });
    }
  }

  inserir(paciente: Paciente): void {
    if (paciente != null) {
      this.PacienteService.inserir(paciente).subscribe((pacienteInserido) => {
        this.pacientes.push(pacienteInserido as Paciente);
      });
    }
  }

  atualizar(paciente: Paciente): void {
    if (paciente != null) {
      this.PacienteService.atualizar(paciente).subscribe(() => {
        this.obterPacientes();
      });
    }
  }

  // atualizarLista(): void {
  //   if (this.pacientesMaioresIdade) {
  //     this.PacienteService.listarMaioresDeIdade().subscribe(
  //       pacientes => this.pacientes = pacientes);
  //   }else {
  //     this.PacienteService.listar().subscribe(
  //       pacientes => this.pacientes = pacientes);
  //   }
  // }
}
