import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products : Product[] = [
    {id: 1, name: 'Product 1', price: 100, imageUrl: ''},
    {id: 2, name: 'Product 2', price: 200, imageUrl: ''},
    {id: 3, name: 'Product 3', price: 300, imageUrl: ''}
  ];

  getProducts(): Observable<Product[]>
  {
    return of(this.products);
  }
}
