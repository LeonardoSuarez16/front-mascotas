import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarInformacionComponent } from './solicitar-informacion.component';

describe('SolicitarInformacionComponent', () => {
  let component: SolicitarInformacionComponent;
  let fixture: ComponentFixture<SolicitarInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarInformacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitarInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
