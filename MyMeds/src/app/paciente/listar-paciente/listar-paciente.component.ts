import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/shared/modelo/paciente';
import { PacienteService } from 'src/app/shared/services/paciente.service';

@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.scss']
})
export class ListarPacienteComponent implements OnInit {
  pacientes: Paciente[] = [];

  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {
    this.obterPacientes();
  }

  obterPacientes(): void {
    this.pacienteService.listar().subscribe(
      pacientesRetornados => {
        this.pacientes = pacientesRetornados;
        console.log(this.pacientes);
      },
      error => {
        console.error(error);
      }
    );
  }

  excluir(pacienteARemover: Paciente): void {
    if (pacienteARemover.id) {
      this.pacienteService.apagar(pacienteARemover.id).subscribe(() => {
        const index = this.pacientes.findIndex(paciente => paciente.id === pacienteARemover.id);
        if (index !== -1) {
          this.pacientes.splice(index, 1);
        }
      });
    }
  }

  inserir(paciente: Paciente): void {
    if (paciente != null) {
      this.pacienteService.inserir(paciente).subscribe(pacienteInserido => {
        this.pacientes.push(pacienteInserido);
      });
    }
  }

  atualizar(paciente: Paciente): void {
    if (paciente != null) {
      this.pacienteService.atualizar(paciente).subscribe(() => {
        this.obterPacientes();
      });
    }
  }
}
