import { TestBed } from '@angular/core/testing';

import { TypeclientService } from './typeclient.service';

describe('TypeclientService', () => {
  let service: TypeclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
