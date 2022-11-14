import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { GuardaAuthService } from './guarda-auth.service';

describe('GuardaAuthService', () => {
  let service: GuardaAuthService;

  beforeEach(() => {
    const authServiceStub = () => ({});
    TestBed.configureTestingModule({
      providers: [
        GuardaAuthService,
        { provide: AuthService, useFactory: authServiceStub }
      ]
    });
    service = TestBed.inject(GuardaAuthService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
