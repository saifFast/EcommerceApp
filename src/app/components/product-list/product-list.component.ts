import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {

    this.categoryService.getCategory().subscribe(categories => {
      this.categories = categories;
    });

    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = products;
    })

    for (let product of this.products) {
      product.disPlayCategory = this.categories.find(category => category.id === product.categoryId)?.name || '';
    }
  }

  onSearch(): void {
    this.filteredProducts = this.products.filter(product => product.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  onReset(): void {
    this.searchTerm = '';
    this.filteredProducts = this.products;
  }

}
