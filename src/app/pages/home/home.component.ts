import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ativo1: boolean = true;
  ativo2: boolean = false;
  ativo3: boolean = false;
  ativo4: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  mostraTodos(){
    this.ativo1 = !this.ativo1;
    this.ativo2 = false;
    this.ativo3 = false;
    this.ativo4 = false;
  }

  mostraFire(){
    this.ativo1 = false;
    this.ativo2 = !this.ativo2;
    this.ativo3 = false;
    this.ativo4 = false;
  }

  mostraEletric(){
    this.ativo1 = false;
    this.ativo2 = false;
    this.ativo3 = !this.ativo3;
    this.ativo4 = false;
  }

  mostraWater(){
    this.ativo1 = false;
    this.ativo2 = false;
    this.ativo3 = false;
    this.ativo4 = !this.ativo4;
  }
}
