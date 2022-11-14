import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class GuardaAuthService {
  constructor(private AuthService: AuthService) {}

  CanActivate(): boolean {
    // return this.AuthService.isAuthenticated();
    return true;
  }
}
