import { Injectable } from '@angular/core';
import { Iproduct } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}
  getProducts(): Promise<Iproduct> {
    return fetch(`https://66b0aca46a693a95b539b8b7.mockapi.io/products`).then(
      (res) => res.json()
    );
  }
  getProductById(id: string) {
    return fetch(
      `https://66b0aca46a693a95b539b8b7.mockapi.io/products/${id}`
    ).then((res) => res.json());
  }
}
