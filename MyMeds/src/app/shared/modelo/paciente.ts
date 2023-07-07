export class Paciente {
  id?: number;
  nome: string;
  sobrenome: string;
  senha: string;
  email: string;
  sexo: string;
  cpf: string;
  idade: number;

  constructor(
    id?: number,
    paciente: Paciente = {  nome: '', sobrenome: '', senha: '',email: '', sexo: '', cpf: '', idade: 0 }
  ) {
    this.id = id;
    this.nome = paciente.nome;
    this.sobrenome = paciente.sobrenome;
    this.senha = paciente.senha;
    this.email = paciente.email;
    this.sexo = paciente.sexo;
    this.cpf = paciente.cpf;
    this.idade = paciente.idade;

  }
}
