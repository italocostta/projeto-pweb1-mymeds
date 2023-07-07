import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../modelo/paciente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  URL_pacientes = 'http://localhost:8080/pacientes';
  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Paciente[]> {
    return this.httpClient.get<Paciente[]>(this.URL_pacientes);
  }

  inserir(paciente: Paciente): Observable<Paciente> {
    return this.httpClient.post<Paciente>(this.URL_pacientes, paciente);
  }

  atualizar(paciente: Paciente): Observable<Paciente> {
    return this.httpClient.put<Paciente>(
      `${this.URL_pacientes}/${paciente.id}`,
      paciente
    );
  }

  apagar(id: number): Observable<Paciente> {
    return this.httpClient.delete<Paciente>(`${this.URL_pacientes}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Paciente> {
    return this.httpClient.get<Paciente>(`${this.URL_pacientes}/${id}`);
  }

  // listarMaioresDeIdade(): Observable<Paciente[]> {
  //   let pacientesMaioresIdade: AngularFirestoreCollection<Paciente>;
  //   pacientesMaioresIdade = this.afs.collection(this.NOME_COLECAO, ref => ref.where('idade', '>', '17'));
  //   return pacientesMaioresIdade.valueChanges();
  // }
}
