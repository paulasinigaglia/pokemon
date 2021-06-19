import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  public logoUrl =
    'https://th.bing.com/th/id/Ra6b72e680c5fd3212fe3ca7dc178e4be?rik=a7eaGr2PwfZ8ZA&pid=ImgRaw';
  public titulo = 'Aqui estão os Pokemons';
  public descricao =
    'A Pokédex, também conhecida como Poké-Agenda no Brasil (e ainda como Dexter ou Dextette, dependendo da voz masculina ou feminina do aparelho) é uma enciclopédia virtual portátil de alta tecnologia que os treinadores Pokémon transportam para registra todas as espécies diferentes de Pokémon que são encontradas durante a sua viagem como treinadores. Em geral, quando são cumpridos determinados requisitos, a capacidade pode ser aumentada permitindo que a Pokédex possa armazenar dados de outros Pokémon, que não são comuns, assim como os Pokémon de outras regiões.';

  constructor() {}

  ngOnInit(): void {}
}
