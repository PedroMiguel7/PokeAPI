import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritosRoutingModule } from './favoritos-routing.module';
import { FavoritosComponent } from './componet/favoritos.component';

@NgModule({
  declarations: [FavoritosComponent],
  imports: [CommonModule, SharedModule, FavoritosRoutingModule],
})
export class FavoritosModule {}
