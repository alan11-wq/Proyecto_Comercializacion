import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioyvideoComponent } from './audioyvideo.component';

describe('AudioyvideoComponent', () => {
  let component: AudioyvideoComponent;
  let fixture: ComponentFixture<AudioyvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioyvideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioyvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
