import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/shared/modelo/paciente';
import { PacienteService } from 'src/app/shared/services/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteFirestoreService } from 'src/app/shared/services/paciente-firestore.service';
import { IMensagem } from 'src/app/shared/modelo/IMensagem';
import { MensagemService } from 'src/app/shared/services/mensagem.service';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.scss'],
})
export class CadastroPacienteComponent implements OnInit {
  pacienteCadastrado: Paciente;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';
  IdPacienteEditado: any = '';

  pacientes: Paciente[] = [];

  constructor(
    private mensagemService: IMensagem,
    private rotaAtual: ActivatedRoute,
    private roteador: Router,
    private PacienteFirestoreService: PacienteFirestoreService
  ) {
    this.pacienteCadastrado = new Paciente('', '', '', '', '', '', '', undefined);
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      // editando
      this.PacienteFirestoreService
        .pesquisarPorId(idParaEdicao)
        .subscribe((paciente) => {
          this.pacienteCadastrado = paciente;
        });

      if (idParaEdicao) {
        this.estahCadastrando = false;
        this.nomeBotaoManutencao = 'Salvar';
      }
    } else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }
  }

  ngOnInit(): void {
    this.PacienteFirestoreService.listar().subscribe((pacientesRetornados) => {
      this.pacientes = pacientesRetornados;
    });
    this.IdPacienteEditado = this.rotaAtual.snapshot.paramMap.get('id');
  }

  manter(): void {
    if (this.estahCadastrando && this.pacienteCadastrado) {
      // Verificar se o ID já existe
      const pacienteExistente = this.pacientes.find(
        (p) => p.id === this.pacienteCadastrado.id
      );
      if (pacienteExistente) {
        this.mensagemService.erro('Paciente já cadastrado!');
        return;
      }

      // ID único, prosseguir com a inserção
      this.PacienteFirestoreService
        .inserir(this.pacienteCadastrado)
        .subscribe((paciente) => {
          this.pacientes.push(paciente as Paciente);
          this.mensagemService.sucesso('Paciente cadastrado com sucesso!');
    });
    } else {
      this.PacienteFirestoreService
        .atualizar(this.pacienteCadastrado)
        .subscribe((paciente) => {
          this.mensagemService.sucesso('Paciente atualizado com sucesso!');
        });
    }

    this.roteador.navigate(['listagempacientes']);
  }

  atualizar(): void {
    if (this.pacienteCadastrado != null) {
      this.PacienteFirestoreService
        .atualizar(this.pacienteCadastrado)
        .subscribe((paciente) => {
          this.roteador.navigate(['listagempacientes']);
        });
    }
  }
}
