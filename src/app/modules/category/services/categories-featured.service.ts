import { inject, Injectable } from '@angular/core';
import { CategoryService } from './category.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesFeaturedService {
  private categoryService = inject(CategoryService);
  readonly categories = toSignal<Category[]>(this.categoryService.getFeatured());
}
