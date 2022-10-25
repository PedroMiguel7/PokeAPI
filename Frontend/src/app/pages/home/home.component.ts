import { Component, OnInit, Output } from '@angular/core';
import { PokemonService } from './../../services/api/pokemon.service';
import { PokemonsService } from 'src/app/services/api/pokemons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  POKEMONGERAL: any[] = [];
  POKEMONS: any[] = [];
  POKEFILTRADO: any[] = [];

  ativo1: boolean = true;
  ativo2: boolean = false;
  ativo3: boolean = false;
  ativo4: boolean = false;


  constructor(private POKEMONserice: PokemonsService, private POKEMONZINHOserice: PokemonService) { }

  ngOnInit(): void {
    this.POKEMONserice.pokemons('pokemon')
    .subscribe( (res: any): any => {
      this.POKEMONGERAL = res;
      res.results.map((poke: any) => { 
        this.POKEMONZINHOserice.pokemon(`${poke.url}`).subscribe( (req: any) => {
          this.POKEMONS.push(req)
        })
      })
      this.mostraTodos();
    })

  }


  mostraTodos(){
    this.ativo1 = true;
    this.ativo2 = false;
    this.ativo3 = false;
    this.ativo4 = false;
    this.POKEFILTRADO= this.POKEMONS
  }

  mostraFire(){
    this.ativo1 = false;
    this.ativo2 = true;
    this.ativo3 = false;
    this.ativo4 = false;
    this.POKEFILTRADO = this.POKEMONS.filter((t: any) => t.types[0].type.name === 'fire' || t.types[1]?.type.name === 'fire' )
    // this.POKEFILTRADO = this.POKEMONS.map((t: any) => (t.types).filter((p: any) => p.type.name === 'fire'))
    console.log(this.POKEFILTRADO)
  }

  mostraEletric(){
    this.ativo1 = false;
    this.ativo2 = false;
    this.ativo3 = true;
    this.ativo4 = false;
    this.POKEFILTRADO = this.POKEMONS.filter((t: any) => t.types[0].type.name === 'eletric' || t.types[1]?.type.name === 'eletric' )
  }

  mostraWater(){
    this.ativo1 = false;
    this.ativo2 = false;
    this.ativo3 = false;
    this.ativo4 = true;
    this.POKEFILTRADO = this.POKEMONS.filter((t: any) => t.types[0].type.name === 'water' || t.types[1]?.type.name === 'water' )
  }
}
