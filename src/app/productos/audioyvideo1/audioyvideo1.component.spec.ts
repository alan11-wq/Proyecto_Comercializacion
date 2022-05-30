import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Audioyvideo1Component } from './audioyvideo1.component';

describe('Audioyvideo1Component', () => {
  let component: Audioyvideo1Component;
  let fixture: ComponentFixture<Audioyvideo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Audioyvideo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Audioyvideo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
