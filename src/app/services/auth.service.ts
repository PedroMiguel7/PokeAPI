import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public LoginResponse?: LoginService;

  public clear(): void{
    this.LoginResponse = undefined;
  }

  public isAuthenticated(): boolean{
    return Boolean(this.LoginResponse);
  }
}
