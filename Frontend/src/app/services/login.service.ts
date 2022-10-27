import { loginUSer } from './../pages/login/login.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private HttpClient: HttpClient) {}

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  fazLogin(user: any) {
    return this.HttpClient.post<loginUSer>(`${API_PATH}/api/`, user).toPromise();
  }
}
