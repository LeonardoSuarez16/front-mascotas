import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibirInformacionComponent } from './recibir-informacion.component';

describe('RecibirInformacionComponent', () => {
  let component: RecibirInformacionComponent;
  let fixture: ComponentFixture<RecibirInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibirInformacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecibirInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
