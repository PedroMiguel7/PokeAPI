import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
@Component({
  selector: 'app-pokeboll',
  templateUrl: './pokeboll.component.html',
  styleUrls: ['./pokeboll.component.scss']
})
export class PokebollComponent implements OnInit {

  Pokebola?: boolean = true;

  constructor() { }


  ngOnInit(): void {
    setTimeout(
      () => {
        this.Pokebola = false;
      }, 3000)
  }

}
