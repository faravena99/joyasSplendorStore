import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'joyaSplendorStore';
}

var root: HTMLElement = document.documentElement;
root.style.setProperty('--principal', '#FFCCF5');
root.style.setProperty('--letras', '#1c1b1b ');