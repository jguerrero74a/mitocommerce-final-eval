import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  httpClient = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/api/categories`;

  getAll() {
    return this.httpClient.get<Category[]>(this.apiUrl);
  }

  getFeatured() {
    return this.httpClient.get<Category[]>(`${this.apiUrl}/featured`);
  }
}
