import { Component, OnInit } from '@angular/core';
import { PokemonApiModel } from 'src/app/services/pokemon-api-model';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';

@Component({
  selector: 'app-poke-page',
  templateUrl: './poke-page.component.html',
  styleUrls: ['./poke-page.component.css'],
})
export class PokePageComponent implements OnInit {
  listaDePokemons: PokemonApiModel[] = [];

  constructor(public pokemonApi: PokemonApiService) {}

  ngOnInit(): void {
    this.pokemonApi.get().subscribe({
      next: (retornoDaApi) => {
        this.listaDePokemons = retornoDaApi;
      },
    });
  }
}
