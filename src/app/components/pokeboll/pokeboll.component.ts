import { Component, OnInit } from '@angular/core';
import { NgtGLTFLoader }from '@angular-three/soba/loaders' 

@Component({
  selector: 'app-pokeboll',
  templateUrl: './pokeboll.component.html',
  styleUrls: ['./pokeboll.component.scss']
})
export class PokebollComponent implements OnInit {

  #color = '';

  constructor(private ngtGlTFloaderService: NgtGLTFLoader) { }

  poke$ = this.ngtGlTFloaderService.load('../../../assets/img/poke_ball.glb');

  ngOnInit(): void {
  }

}
