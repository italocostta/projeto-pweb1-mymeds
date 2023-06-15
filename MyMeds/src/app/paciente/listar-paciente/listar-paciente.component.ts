import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/shared/modelo/paciente';
import { PacienteService } from 'src/app/shared/services/paciente.service';
import { PacienteFirestoreService } from 'src/app/shared/services/paciente-firestore.service';

@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.scss'],
})
export class ListarPacienteComponent implements OnInit {
  pacientes: Paciente[] = [];
  pacientesMaioresIdade = false;

  constructor(private PacienteFirestoreService: PacienteFirestoreService) {}

  ngOnInit(): void {
    this.obterPacientes();
  }

  obterPacientes(): void {
    this.PacienteFirestoreService.listar().subscribe(
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
      this.PacienteFirestoreService.apagar(pacienteARemover.id).subscribe(() => {
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
      this.PacienteFirestoreService.inserir(paciente).subscribe((pacienteInserido) => {
        this.pacientes.push(pacienteInserido as Paciente);
      });
    }
  }

  atualizar(paciente: Paciente): void {
    if (paciente != null) {
      this.PacienteFirestoreService.atualizar(paciente).subscribe(() => {
        this.obterPacientes();
      });
    }
  }

  atualizarLista(): void {
    if (this.pacientesMaioresIdade) {
      this.PacienteFirestoreService.listarMaioresDeIdade().subscribe(
        (pacientesRetornados) => {
          this.pacientes = pacientesRetornados;
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      this.PacienteFirestoreService.listar().subscribe(
        (pacientesRetornados) => {
          this.pacientes = pacientesRetornados;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
