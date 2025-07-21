import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products : Product[] = [
    {id: 1, name: 'Product 1', price: 100, imageUrl: '/images/2.jpg'},
    {id: 2, name: 'Product 2', price: 200, imageUrl: '/images/3.jpg'},
    {id: 3, name: 'Product 3', price: 300, imageUrl: '/images/4.jpg'},
    {id: 4, name: 'Product 4', price: 400, imageUrl: '/images/2.jpg'},
    {id: 5, name: 'Product 5', price: 500, imageUrl: '/images/3.jpg'},
    {id: 6, name: 'Product 6', price: 600, imageUrl: '/images/4.jpg'},
    {id: 7, name: 'Product 7', price: 700, imageUrl: '/images/2.jpg'},
    {id: 8, name: 'Product 8', price: 800, imageUrl: '/images/3.jpg'},
    {id: 9, name: 'Product 9', price: 900, imageUrl: '/images/4.jpg'},
    {id: 10, name: 'Product 10', price: 1000, imageUrl: '/images/2.jpg'},
    {id: 11, name: 'Product 11', price: 1100, imageUrl: '/images/3.jpg'},
    {id: 12, name: 'Product 12', price: 1200, imageUrl: '/images/4.jpg'},
    {id: 13, name: 'Product 13', price: 1300, imageUrl: '/images/2.jpg'},
    {id: 14, name: 'Product 14', price: 1400, imageUrl: '/images/3.jpg'},
    {id: 15, name: 'Product 15', price: 1500, imageUrl: '/images/4.jpg'},
    {id: 16, name: 'Product 16', price: 1600, imageUrl: '/images/2.jpg'},
    {id: 17, name: 'Product 17', price: 1700, imageUrl: '/images/3.jpg'},
    {id: 18, name: 'Product 18', price: 1800, imageUrl: '/images/4.jpg'},
    {id: 19, name: 'Product 19', price: 1900, imageUrl: '/images/2.jpg'},
    {id: 20, name: 'Product 20', price: 2000, imageUrl: '/images/3.jpg'},
    {id: 21, name: 'Product 21', price: 2100, imageUrl: '/images/4.jpg'},
    {id: 22, name: 'Product 22', price: 2200, imageUrl: '/images/2.jpg'},
  ];

  getProducts(): Observable<Product[]>
  {
    return of(this.products);
  }
}
