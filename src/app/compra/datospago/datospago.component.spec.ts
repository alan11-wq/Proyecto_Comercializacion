import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatospagoComponent } from './datospago.component';

describe('DatospagoComponent', () => {
  let component: DatospagoComponent;
  let fixture: ComponentFixture<DatospagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatospagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatospagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
