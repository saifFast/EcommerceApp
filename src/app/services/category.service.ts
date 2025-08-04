import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories: Category[] = [
    { id: 1, name: 'Bags', description: 'Devices and gadgets' },
    { id: 2, name: 'Stylish', description: 'Apparel and accessories' },
    { id: 3, name: 'HandBags', description: 'Furniture and appliances' }
  ];

  getCategory(): Observable<Category[]> {
    return of(this.categories);
  }
}
