import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonApiModel } from './pokemon-api-model';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  public get(): Observable<PokemonApiModel[]> {
    return this.http.get<PokemonApiModel[]>(this.apiUrl);
  }
}
