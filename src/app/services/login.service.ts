import { USER } from './../pages/login/user.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users: USER[] = [
    { nickname: "vinicius",
      email: "vinicus@gmail.com",
      senha: "amomiguel",
      pokemonsFave: [],
    },
    { nickname: "larissa",
      email: "larissa@gmail.com",
      senha: "amomiguelTB",
      pokemonsFave: [],
    },
  ]
  
  constructor() { }
}
