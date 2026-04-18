import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    RouterLink
  ],
  standalone :true
})
export class App {
  email : string = "fati@gmail.com";
}
