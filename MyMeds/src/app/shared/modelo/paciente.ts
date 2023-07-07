export class Paciente {
  constructor(
    public nome: string,
    public sobrenome: string,
    public senha: string,
    public email: string,
    public sexo: string,
    public cpf: string,
    public idade?: number,
    public id?: string
  ) {}
}
