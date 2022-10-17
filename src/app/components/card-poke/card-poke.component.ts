import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-poke',
  templateUrl: './card-poke.component.html',
  styleUrls: ['./card-poke.component.scss']
})
export class CardPokeComponent implements OnInit {

  @Input() POKEMON!: any;
  name: string = this.POKEMON.name;
  id: number = this.POKEMON.id;
  types: any = this.POKEMON.types;
  
  // name: string = 'aaaaaa';
  // id: number = 2;
  // types: any = [{slot: 1, type: {name: 'fire', url: 'aaaaaaa'}}, {slot: 1, type: {name: 'water', url: 'aaaaaaa'}}, {slot: 1, type: {name: 'eletric', url: 'aaaaaaa'}}];
  
  fav: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  favoritar(){
    this.fav = !this.fav;
  }

}
