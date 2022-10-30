import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.scss'],
})
export class ThemeButtonComponent implements OnInit {
  public tema: Array<string> = ['moon', 'DARK'];

  constructor() {}

  ngOnInit(): void {}

  public toggle() {
    const theme = document.body.classList.toggle('dark-theme');
    if (theme) {
      return (this.tema = ['sun', 'LIGHT']);
    }
    return (this.tema = ['moon', 'DARK']);
  }
}
