import { TestBed } from '@angular/core/testing';

import { PacienteFirestoreService } from './paciente-firestore.service';

describe('PacienteFirestoreService', () => {
  let service: PacienteFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacienteFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
