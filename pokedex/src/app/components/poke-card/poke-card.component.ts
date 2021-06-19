import { Component, Input, OnInit } from '@angular/core';
import { PokemonApiModel } from 'src/app/services/pokemon-api-model';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css'],
})
export class PokeCardComponent implements OnInit {
  @Input() pokemon: PokemonApiModel | undefined;

  constructor() {}

  ngOnInit(): void {}
}
