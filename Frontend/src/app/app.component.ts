import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app-module.html',
  styleUrls: ['app.component.scss']
}) 
export class AppComponent {

  constructor(private router: Router) { }

}
