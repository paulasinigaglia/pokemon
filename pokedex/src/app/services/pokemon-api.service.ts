import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonApiModel } from './pokemon-api-model';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://digimon-api.vercel.app/api/digimon';

  public get(): Observable<PokemonApiModel[]> {
    return this.http.get<PokemonApiModel[]>(this.apiUrl);
  }
}
