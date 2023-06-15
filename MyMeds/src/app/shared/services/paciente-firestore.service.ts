import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import {Paciente} from '../modelo/paciente';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PacienteFirestoreService {

  colecaoPaciente: AngularFirestoreCollection<Paciente>;
  NOME_COLECAO = 'paciente';

  constructor(private afs: AngularFirestore) {
    this.colecaoPaciente = afs.collection(this.NOME_COLECAO);
  }


  listar(): Observable<Paciente[]> {
    return this.colecaoPaciente.valueChanges({idField: 'id'});
  }

  inserir(paciente: Paciente): Observable<object> {
    delete paciente.id;
    return from(this.colecaoPaciente.add(Object.assign({...paciente})));
  }

  apagar(id: string): Observable<void> {
    return from(this.colecaoPaciente.doc(id).delete());
  }

  pesquisarPorId(id: string): Observable<Paciente> {
    return this.colecaoPaciente.doc(id).get().pipe(map(document => Object.assign({id: document.id}, document.data())));
  }
  
  atualizar(paciente: Paciente): Observable<void> {
    const id = paciente.id;
    delete paciente.id;
    return from(this.colecaoPaciente.doc(id).update(Object.assign({...paciente})));
  }

  listarMaioresDeIdade(): Observable<Paciente[]> {
    let pacientesMaioresIdade: AngularFirestoreCollection<Paciente>;
    pacientesMaioresIdade = this.afs.collection(this.NOME_COLECAO, ref => ref.where('idade', '>', '17'));
    return pacientesMaioresIdade.valueChanges();
  }
}
