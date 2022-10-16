import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<app-sidebar *ngIf="false"></app-sidebar><router-outlet></router-outlet>`,
}) 
export class AppComponent {

  constructor(private router: Router) { }
  
  pathLogin: boolean = false;
}
