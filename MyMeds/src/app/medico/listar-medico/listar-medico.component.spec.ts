import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMedicoComponent } from './listar-medico.component';

describe('ListarMedicoComponent', () => {
  let component: ListarMedicoComponent;
  let fixture: ComponentFixture<ListarMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarMedicoComponent]
    });
    fixture = TestBed.createComponent(ListarMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
