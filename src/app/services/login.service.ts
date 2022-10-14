import { USER } from './../pages/login/user.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  static fazLogin(lU: import("../pages/login/login.interface").loginUSer | undefined) {
    throw new Error('Method not implemented.');
  }
  user: USER = 
    { nickname: "larissa",
      email: "larissa@gmail.com",
      senha: "amomiguelTB",
      pokemonsFave: [],
    }

  fazLogin(user?: any){
    return this.user.email.includes(user.email)
  }
}
