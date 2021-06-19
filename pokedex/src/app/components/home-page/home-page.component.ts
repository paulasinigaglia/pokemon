import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  public logoUrl =
    'https://th.bing.com/th/id/Ra6b72e680c5fd3212fe3ca7dc178e4be?rik=a7eaGr2PwfZ8ZA&pid=ImgRaw';
  public titulo = 'Não me agrida!';
  public descricao =
    'A Digidex, também conhecida como Digi-Agenda no Brasil, pode ser usada para registrar todos os seus digimons. De nada :)';

  constructor() {}

  ngOnInit(): void {}
}
