import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products : Product[] = [
    {id: 1, name: 'Product 1', price: 100, imageUrl: '/images/2.jpg', categoryId: 1},
    {id: 2, name: 'Product 2', price: 200, imageUrl: '/images/3.jpg', categoryId: 1},
    {id: 3, name: 'Product 3', price: 300, imageUrl: '/images/4.jpg', categoryId: 1},
    {id: 4, name: 'Product 4', price: 400, imageUrl: '/images/2.jpg', categoryId: 2},
    {id: 5, name: 'Product 5', price: 500, imageUrl: '/images/3.jpg', categoryId: 2},
    {id: 6, name: 'Product 6', price: 600, imageUrl: '/images/4.jpg', categoryId: 2},
    {id: 7, name: 'Product 7', price: 700, imageUrl: '/images/2.jpg', categoryId: 3},
    {id: 8, name: 'Product 8', price: 800, imageUrl: '/images/3.jpg', categoryId: 3},
    {id: 9, name: 'Product 9', price: 900, imageUrl: '/images/4.jpg', categoryId: 3},
  ];

  getProducts(): Observable<Product[]>
  {
    return of(this.products);
  }
}
