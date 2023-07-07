import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medico } from '../modelo/medico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicoService {
  URL_medicos = 'http://localhost:3000/medicos';
  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Medico[]> {
    return this.httpClient.get<Medico[]>(this.URL_medicos);
  }

  inserir(medico: Medico): Observable<Medico> {
    return this.httpClient.post<Medico>(this.URL_medicos, medico);
  }

  atualizar(medico: Medico): Observable<Medico> {
    return this.httpClient.put<Medico>(
      `${this.URL_medicos}/${medico.id}`,
      medico
    );
  }

  apagar(id: string): Observable<Medico> {
    return this.httpClient.delete<Medico>(`${this.URL_medicos}/${id}`);
  }

  pesquisarPorId(id: string): Observable<Medico> {
    return this.httpClient.get<Medico>(`${this.URL_medicos}/${id}`);
  }
}