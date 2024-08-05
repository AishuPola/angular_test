import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
export interface Iproduct {
  id: string;
  image: string;
  name: string;
  price: string;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
