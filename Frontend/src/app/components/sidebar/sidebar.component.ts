import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) {}

  showSidebar: boolean = false;

  ngOnInit(): void {}

  iconFav() {
    this.router.navigate(['/favoritos']);
  }

  iconEve() {
    this.router.navigate(['/todos']);
  }
  iconSea() {
    this.router.navigate(['/procurar']);
  }

  logout() {
    this.router.navigate(['/']);
  }
}
