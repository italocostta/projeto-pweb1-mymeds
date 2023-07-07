import { TestBed } from '@angular/core/testing';
import { MedicoFirestoreService } from './medico-firestore.service';

describe('MedicoFirestoreService', () => {
  let service: MedicoFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicoFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
