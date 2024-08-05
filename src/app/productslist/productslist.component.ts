import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-productslist',
  standalone: true,
  imports: [],
  templateUrl: './productslist.component.html',
  styleUrl: './productslist.component.scss',
})
export class ProductslistComponent {
  books: any;
  filteredBooks: any;

  constructor(private productservice: ProductsService, private router: Route) {}
  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productservice.getBooks().then((data) => {
      this.books = data;
      this.filteredBooks = this.books;
    });
  }
}
