import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
@Component({
  selector: 'app-pokeboll',
  templateUrl: './pokeboll.component.html',
  styleUrls: ['./pokeboll.component.scss']
})
export class PokebollComponent implements OnInit {

  Pokebola?: boolean = true;
  Pokebola_abre?: boolean = false;
  Pokemon?: boolean = false;

  constructor() { }


  ngOnInit(): void {
    setTimeout(
      () => {
        this.Pokebola = false;
        this.Pokebola_abre = true;
        setTimeout( () => {
          this.Pokemon = true;
          this.Pokebola_abre = false;
        }, 1100
        )
      }, 3000)
  }

}
