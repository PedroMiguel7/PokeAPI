import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { api_path } from 'src/environments/environment.prod';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private HttpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  pokemons(url: String): Observable<any> {
    return this.HttpClient.get<any>(`${api_path}/${url}/`).pipe(tap((x) => x));
  }
}
