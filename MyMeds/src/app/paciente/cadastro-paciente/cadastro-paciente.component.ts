import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/shared/modelo/paciente';
import { PacienteService } from 'src/app/shared/services/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteFirestoreService } from 'src/app/shared/services/paciente-firestore.service';
import { pageTransitionAnimation } from 'src/app/animations/page-transition.animation';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.scss'],
  animations: [pageTransitionAnimation],
})
export class CadastroPacienteComponent implements OnInit {
  pacienteCadastrado: Paciente;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';
  IdPacienteEditado: any = '';
  animationName: string = 'CadastroPaciente';
  formPaciente: FormGroup;
  cpfPattern = "[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2}";

  pacientes: Paciente[] = [];

  constructor(
    private rotaAtual: ActivatedRoute,
    private roteador: Router,
    private pacienteService: PacienteService,
    private formBuilder: FormBuilder,
  ) {
    this.pacienteCadastrado = new Paciente();
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      // editando
      this.pacienteService
        .pesquisarPorId(Number(idParaEdicao))
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
    this.formPaciente = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(this.cpfPattern)]],
      idade: ['', Validators.required],
      senha: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // outros campos e validações
    });
  }

  ngOnInit(): void {
    this.pacienteService.listar().subscribe((pacientesRetornados) => {
      this.pacientes = pacientesRetornados;
      console.log('Estou aqui', pacientesRetornados)
    });
    this.IdPacienteEditado = this.rotaAtual.snapshot.paramMap.get('id');
    this.animationName = this.rotaAtual.snapshot.data['animation'];    
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
          this.pacientes.push(paciente as Paciente);
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