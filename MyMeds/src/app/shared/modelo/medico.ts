export class Medico {
  id?: number;
  nome: string;
  sobrenome: string;
  senha: string;
  email: string;
  especialidade: string;
  sexo: string;
  crm: string;
  idade: number;

  constructor(
    id?: number,
    medico: Medico = {
      nome: '',
      sobrenome: '',
      senha: '',
      email: '',
      sexo: '',
      crm: '',
      idade: 0,
      especialidade: '',
    }
  ) {
    this.id = id;
    this.nome = medico.nome;
    this.sobrenome = medico.sobrenome;
    this.senha = medico.senha;
    this.email = medico.email;
    this.sexo = medico.sexo;
    this.crm = medico.crm;
    this.idade = medico.idade;
    this.especialidade = medico.especialidade;
  }
}
