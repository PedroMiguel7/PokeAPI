import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthService } from './guards/auth.service';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    const authServiceStub = () => ({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LoginService,
        { provide: AuthService, useFactory: authServiceStub },
      ],
    });
    service = TestBed.inject(LoginService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
