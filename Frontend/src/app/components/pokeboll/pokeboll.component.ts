import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pokeboll',
  templateUrl: './pokeboll.component.html',
  styleUrls: ['./pokeboll.component.scss']
})
export class PokebollComponent implements OnInit {

  Pokebola?: boolean = true;
  Pokebola_abre?: boolean = false;
  Pokemon?: boolean = false;

  Pokebola2?: boolean = true;
  Pokebola_abre2?: boolean = false;
  Pokemon2?: boolean = false;

  constructor() { }

  IntroPoses(){
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

      setTimeout(
        () => {
          this.Pokebola2 = false;
          this.Pokebola_abre2 = true;
          setTimeout( () => {
            this.Pokemon2 = true;
            this.Pokebola_abre2 = false;
          }, 1100
          )
        }, 4000)
  }
  

  ngOnInit(): void {
    this.IntroPoses()
  }
}