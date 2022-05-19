import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputoComponent } from './computo.component';

describe('ComputoComponent', () => {
  let component: ComputoComponent;
  let fixture: ComponentFixture<ComputoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
