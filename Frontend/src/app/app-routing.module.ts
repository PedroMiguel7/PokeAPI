import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { GuardaAuthService } from './services/guards/guarda-auth.service';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'favoritos', canActivate: [GuardaAuthService], component: FavoritesComponent},
  {path: 'todos', canActivate: [GuardaAuthService], component: HomeComponent},
  {path: 'procurar', canActivate: [GuardaAuthService], component: SearchComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
