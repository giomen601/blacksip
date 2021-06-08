import { TestBed } from '@angular/core/testing';

import { BlacksipApiService } from './blacksip-api.service';

describe('BlacksipApiService', () => {
  let service: BlacksipApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlacksipApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
