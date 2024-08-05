import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {
  orders: any[] = [];

  constructor(private productService: ProductsService) {}
  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.productService.getOrdersP().then((orders) => {});
  }
}
