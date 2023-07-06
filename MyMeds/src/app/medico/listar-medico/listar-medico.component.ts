import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/shared/modelo/medico';
import { MedicoService } from 'src/app/shared/services/medico.service';
import { MedicoFirestoreService } from 'src/app/shared/services/medico-firestore.service';

@Component({
  selector: 'app-listar-medico',
  templateUrl: './listar-medico.component.html',
  styleUrls: ['./listar-medico.component.scss'],
})
export class ListarMedicoComponent implements OnInit {
  medicos: Medico[] = [];
  medicosMaioresIdade = false;

  constructor(private MedicoFirestoreService: MedicoFirestoreService) {}

  ngOnInit(): void {
    this.obterMedicos();
  }

  obterMedicos(): void {
    this.MedicoFirestoreService.listar().subscribe(
      (medicosRetornados) => {
        this.medicos = medicosRetornados;
        console.log(this.medicos);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  excluir(medicoARemover: Medico): void {
    if (medicoARemover.id) {
      this.MedicoFirestoreService.apagar(medicoARemover.id).subscribe(() => {
        const index = this.medicos.findIndex(
          (medico) => medico.id === medicoARemover.id
        );
        if (index !== -1) {
          this.medicos.splice(index, 1);
        }
      });
    }
  }

  inserir(medico: Medico): void {
    if (medico != null) {
      this.MedicoFirestoreService.inserir(medico).subscribe((medicoInserido) => {
        this.medicos.push(medicoInserido as Medico);
      });
    }
  }

  atualizar(medico: Medico): void {
    if (medico != null) {
      this.MedicoFirestoreService.atualizar(medico).subscribe(() => {
        this.obterMedicos();
      });
    }
  }

  atualizarLista(): void {
    if (this.medicosMaioresIdade) {
      this.MedicoFirestoreService.listarMaioresDeIdade().subscribe(
        medicos => this.medicos = medicos);
    }else {
      this.MedicoFirestoreService.listar().subscribe(
        medicos => this.medicos = medicos);
    }
  }
}
