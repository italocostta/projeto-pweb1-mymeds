export class Paciente {
    constructor(
      public id: number = 0,
      public nome: string = '',
      public sobrenome: string = '',
      public senha: string = '',
      public email: string = '',
      public dataNascimento: string = '',
      public sexo: string = '',
      public cpf: string = ''
    ) {}
};