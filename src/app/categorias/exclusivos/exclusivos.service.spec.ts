import { TestBed } from '@angular/core/testing';

import { ExclusivosService } from './exclusivos.service';

describe('ExclusivosService', () => {
  let service: ExclusivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExclusivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
