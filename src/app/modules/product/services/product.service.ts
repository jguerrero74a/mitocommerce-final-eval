import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  httpClient = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getProducts() {
    return this.httpClient.get<Product[]>(`${this.apiUrl}/api/products`);
  }

  getProductsFeatured() {
    return this.httpClient.get<Product[]>(`${this.apiUrl}/api/products/featured`);
  }
}
