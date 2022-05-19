import { TestBed } from '@angular/core/testing';

import { ComputoService } from './computo.service';

describe('ComputoService', () => {
  let service: ComputoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
