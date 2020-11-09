import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosBuscarComponent } from './datos-buscar.component';

describe('DatosBuscarComponent', () => {
  let component: DatosBuscarComponent;
  let fixture: ComponentFixture<DatosBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
