import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from '../app.component';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  everyproduct!: Iproduct;
  isLoading: boolean = true;
  msg = '';

  constructor(
    private productservice: ProductsService,
    private route: ActivatedRoute, // DI
    private router: Router
  ) {}
}
