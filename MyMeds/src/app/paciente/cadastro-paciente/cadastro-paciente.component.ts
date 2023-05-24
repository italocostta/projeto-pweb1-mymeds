import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/shared/modelo/paciente';
import { PacienteService } from 'src/app/shared/services/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private rotaAtual: ActivatedRoute,
    private roteador: Router,
    private pacienteService: PacienteService
  ) {
    this.pacienteCadastrado = new Paciente('', '', '', '', '', '', '');
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      // editando
      this.pacienteService
        .pesquisarPorId(+idParaEdicao)
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
    this.pacienteService.listar().subscribe((pacientesRetornados) => {
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
        console.log('ID já existe. Não é possível cadastrar o paciente.');
        return;
      }

      // ID único, prosseguir com a inserção
      this.pacienteService
        .inserir(this.pacienteCadastrado)
        .subscribe((paciente) => {
          this.pacientes.push(paciente);
        });
    } else {
      this.pacienteService
        .atualizar(this.pacienteCadastrado)
        .subscribe((paciente) => {
          // Atualização bem-sucedida
        });
    }

    this.roteador.navigate(['listagempacientes']);
  }

  atualizar(): void {
    if (this.pacienteCadastrado != null) {
      this.pacienteService
        .atualizar(this.pacienteCadastrado)
        .subscribe((paciente) => {
          this.roteador.navigate(['listagempacientes']);
        });
    }
  }
}
