import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/shared/modelo/medico';
import { MedicoService } from 'src/app/shared/services/medico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicoFirestoreService } from 'src/app/shared/services/medico-firestore.service';
import { IMensagem } from 'src/app/shared/modelo/IMensagem';
import { MensagemService } from 'src/app/shared/services/mensagem.service';
import { pageTransitionAnimation } from 'src/app/animations/page-transition.animation';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-medico',
  templateUrl: './cadastro-medico.component.html',
  styleUrls: ['./cadastro-medico.component.scss'],
  animations: [pageTransitionAnimation],
})
export class CadastroMedicoComponent implements OnInit {
  medicoCadastrado: Medico;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';
  IdMedicoEditado: any = '';
  animationName: string = 'CadastroMedico';
  formMedico: FormGroup;
  crmPattern = /^[A-Z]{2}-\d{4,6}$/;

  medicos: Medico[] = [];

  constructor(
    private mensagemService: IMensagem,
    private rotaAtual: ActivatedRoute,
    private roteador: Router,
    private MedicoFirestoreService: MedicoFirestoreService,
    private formBuilder: FormBuilder,
    
  ) {
    this.medicoCadastrado = new Medico('', '', '', '', '', '', '', undefined);
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      // editando
      this.MedicoFirestoreService
        .pesquisarPorId(idParaEdicao)
        .subscribe((medico) => {
          this.medicoCadastrado = medico;
        });

      if (idParaEdicao) {
        this.estahCadastrando = false;
        this.nomeBotaoManutencao = 'Salvar';
      }
    } else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }

    this.formMedico = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      crm: ['', [Validators.required, Validators.pattern(this.crmPattern)]],
      idade: ['', Validators.required],
      especialidade: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      // outros campos e validações
    });
  }

  ngOnInit(): void {
    this.MedicoFirestoreService.listar().subscribe((medicosRetornados) => {
      this.medicos = medicosRetornados;
    });
    this.IdMedicoEditado = this.rotaAtual.snapshot.paramMap.get('id');
    this.animationName = this.rotaAtual.snapshot.data['animation'];
  }

  manter(): void {
    if (this.estahCadastrando && this.medicoCadastrado) {
      // Verificar se o ID já existe
      const medicoExistente = this.medicos.find(
        (p) => p.id === this.medicoCadastrado.id
      );
      if (medicoExistente) {
        this.mensagemService.erro('Medico já cadastrado!');
        return;
      }

      // ID único, prosseguir com a inserção
      this.MedicoFirestoreService
        .inserir(this.medicoCadastrado)
        .subscribe((medico) => {
          this.medicos.push(medico as Medico);
          this.mensagemService.sucesso('Medico cadastrado com sucesso!');
    });
    } else {
      this.MedicoFirestoreService
        .atualizar(this.medicoCadastrado)
        .subscribe((medico) => {
          this.mensagemService.sucesso('Medico atualizado com sucesso!');
        });
    }

    this.roteador.navigate(['listagemmedicos']);
  }

  atualizar(): void {
    if (this.medicoCadastrado != null) {
      this.MedicoFirestoreService
        .atualizar(this.medicoCadastrado)
        .subscribe((medico) => {
          this.roteador.navigate(['listagemmedicos']);
        });
    }
  }
}
