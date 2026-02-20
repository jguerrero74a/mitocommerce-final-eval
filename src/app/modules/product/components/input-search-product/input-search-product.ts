import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-input-search-product',
  imports: [FormsModule],
  templateUrl: './input-search-product.html',
  styleUrl: './input-search-product.css',
})
export class InputSearchProduct {
  searchTerm = signal('');
  products = signal<Product[]>([]);

  searchProduct() {}
}
