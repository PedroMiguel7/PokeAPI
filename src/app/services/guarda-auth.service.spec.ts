import { TestBed } from '@angular/core/testing';

import { GuardaAuthService } from './guarda-auth.service';

describe('GuardaAuthService', () => {
  let service: GuardaAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardaAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
