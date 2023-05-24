export class Paciente {
    constructor(
      public id: number,
      public nome: string = '',
      public sobrenome: string = '',
      public senha: string = '',
      public email: string = '',
      public dataNascimento: string = '',
      public sexo: string = '',
      public cpf: string = ''
    ) {}
};