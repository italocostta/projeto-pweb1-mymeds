import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medico } from '../modelo/medico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicoService {
  URL_pacientes = 'http://localhost:3000/pacientes';
  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Medico[]> {
    return this.httpClient.get<Medico[]>(this.URL_pacientes);
  }

  inserir(paciente: Medico): Observable<Medico> {
    return this.httpClient.post<Medico>(this.URL_pacientes, paciente);
  }

  atualizar(paciente: Medico): Observable<Medico> {
    return this.httpClient.put<Medico>(
      `${this.URL_pacientes}/${paciente.id}`,
      paciente
    );
  }

  apagar(id: string): Observable<Medico> {
    return this.httpClient.delete<Medico>(`${this.URL_pacientes}/${id}`);
  }

  pesquisarPorId(id: string): Observable<Medico> {
    return this.httpClient.get<Medico>(`${this.URL_pacientes}/${id}`);
  }
}
