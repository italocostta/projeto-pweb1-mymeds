import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import {Medico} from '../modelo/medico';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicoFirestoreService {

  colecaoMedico: AngularFirestoreCollection<Medico>;
  NOME_COLECAO = 'paciente';

  constructor(private afs: AngularFirestore) {
    this.colecaoMedico = afs.collection(this.NOME_COLECAO);
  }


  listar(): Observable<Medico[]> {
    return this.colecaoMedico.valueChanges({idField: 'id'});
  }

  inserir(paciente: Medico): Observable<object> {
    delete paciente.id;
    return from(this.colecaoMedico.add(Object.assign({...paciente})));
  }

  apagar(id: string): Observable<void> {
    return from(this.colecaoMedico.doc(id).delete());
  }

  pesquisarPorId(id: string): Observable<Medico> {
    return this.colecaoMedico.doc(id).get().pipe(map(document => Object.assign({id: document.id}, document.data())));
  }
  
  atualizar(paciente: Medico): Observable<void> {
    const id = paciente.id;
    delete paciente.id;
    return from(this.colecaoMedico.doc(id).update(Object.assign({...paciente})));
  }

  listarMaioresDeIdade(): Observable<Medico[]> {
    let pacientesMaioresIdade: AngularFirestoreCollection<Medico>;
    pacientesMaioresIdade = this.afs.collection(this.NOME_COLECAO, ref => ref.where('idade', '>', '17'));
    return pacientesMaioresIdade.valueChanges();
  }
}
