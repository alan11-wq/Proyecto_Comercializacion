import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludybellezaComponent } from './saludybelleza.component';

describe('SaludybellezaComponent', () => {
  let component: SaludybellezaComponent;
  let fixture: ComponentFixture<SaludybellezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludybellezaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludybellezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
