import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductPage } from '../interfaces/productPage';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  httpClient = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  getProducts({ searchTerm, categoryId }: { searchTerm: string; categoryId?: number }) {
    const searchUrl = `${this.apiUrl}/api/products?search=${searchTerm}`;
    const categoryUrl = `${this.apiUrl}/api/products?categoryId=${categoryId}`;

    const url = searchTerm ? searchUrl : categoryUrl;
    return this.httpClient.get<ProductPage>(url);
  }

  getProductsFeatured() {
    return this.httpClient.get<Product[]>(`${this.apiUrl}/api/products/featured`);
  }
}
