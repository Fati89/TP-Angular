import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    RouterLink,
    RouterOutlet
  ],
  standalone :true
})
export class App {
  email : string = "fati@gmail.com";
}
