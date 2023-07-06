export class Medico {
    constructor(
      public nome: string,
      public sobrenome: string,
      public senha: string,
      public email: string,
      public dataNascimento: string,
      public sexo: string,
      public crm: string,
      public idade?: number,
      public id?: string
    ) {}
  }