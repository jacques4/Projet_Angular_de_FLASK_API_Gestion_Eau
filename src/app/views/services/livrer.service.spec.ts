import { TestBed } from '@angular/core/testing';

import { LivrerService } from './livrer.service';

describe('LivrerService', () => {
  let service: LivrerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivrerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
