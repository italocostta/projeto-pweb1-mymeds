import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPacienteComponent } from './listar-paciente.component';

describe('ListarPacienteComponent', () => {
  let component: ListarPacienteComponent;
  let fixture: ComponentFixture<ListarPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPacienteComponent]
    });
    fixture = TestBed.createComponent(ListarPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
