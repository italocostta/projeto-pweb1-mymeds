import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/shared/modelo/medico';
import { MedicoService } from 'src/app/shared/services/medico.service';
import { MedicoFirestoreService } from 'src/app/shared/services/medico-firestore.service';
import { pageTransitionAnimation } from 'src/app/animations/page-transition.animation';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-listar-medico',
  templateUrl: './listar-medico.component.html',
  styleUrls: ['./listar-medico.component.scss'],
  animations: [pageTransitionAnimation],
})
export class ListarMedicoComponent implements OnInit {
  medicos: Medico[] = [];
  medicosMaioresIdade = false;
  animationName: string = 'ListarMedico';

  constructor(private rotaAtual: ActivatedRoute, private medicoService: MedicoService) {}

  ngOnInit(): void {
    this.obterMedicos();
    this.animationName = this.rotaAtual.snapshot.data['animation'];
  }

  obterMedicos(): void {
    this.medicoService.listar().subscribe(
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
      this.medicoService.apagar(medicoARemover.id).subscribe(() => {
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
      this.medicoService.inserir(medico).subscribe((medicoInserido) => {
        this.medicos.push(medicoInserido as Medico);
      });
    }
  }

  atualizar(medico: Medico): void {
    if (medico != null) {
      this.medicoService.atualizar(medico).subscribe(() => {
        this.obterMedicos();
      });
    }
  }

  atualizarLista(): void {
    // if (this.medicosMaioresIdade) {
    //   this.MedicoFirestoreService.listarMaioresDeIdade().subscribe(
    //     medicos => this.medicos = medicos);
    // }else {
      this.medicoService.listar().subscribe(
        medicos => this.medicos = medicos);
    
  }
}
