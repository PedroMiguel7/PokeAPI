import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-poke',
  templateUrl: './card-poke.component.html',
  styleUrls: ['./card-poke.component.scss']
})
export class CardPokeComponent implements OnInit {

  fav: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  favoritar(){
    this.fav = !this.fav;
  }

}
