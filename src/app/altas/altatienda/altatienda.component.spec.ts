import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltatiendaComponent } from './altatienda.component';

describe('AltatiendaComponent', () => {
  let component: AltatiendaComponent;
  let fixture: ComponentFixture<AltatiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltatiendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltatiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
