import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltacategoriaComponent } from './altacategoria.component';

describe('AltacategoriaComponent', () => {
  let component: AltacategoriaComponent;
  let fixture: ComponentFixture<AltacategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltacategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltacategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
