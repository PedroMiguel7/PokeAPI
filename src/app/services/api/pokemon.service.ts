import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private  HttpClient:  HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  pokemon(url: any) {
    return this.HttpClient.get(`${url}`).toPromise();
  }
}
