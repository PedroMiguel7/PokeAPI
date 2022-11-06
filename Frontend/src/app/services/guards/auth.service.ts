import { LoginService } from '../login.service';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public LoginResponse?: LoginService;
  public clear(): void {
    this.LoginResponse = undefined;
  }
  public isAuthenticated(): boolean {
    const helper = new JwtHelperService();
    const Token = JSON.stringify(localStorage.getItem('access_token'));
    const decodedToken = helper.decodeToken(Token);
    return Boolean(this.LoginResponse);
  }
}
