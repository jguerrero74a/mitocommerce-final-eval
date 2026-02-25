import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../interfaces/product';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ProductService } from '../../services/product.service';
import { CategoriesFeaturedService } from '@/app/modules/category/services/categories-featured.service';
import { debounceTime, switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-search-product',
  imports: [FormsModule],
  templateUrl: './input-search-product.html',
  styleUrl: './input-search-product.css',
})
export class InputSearchProduct {
  searchTerm = signal('');
  categoriesFeaturedService = inject(CategoriesFeaturedService);
  productService = inject(ProductService);
  products = toSignal(
    toObservable(this.searchTerm).pipe(
      debounceTime(1000),
      switchMap((searchTerm) =>
        this.productService.getProducts({
          searchTerm,
          categoryId: 0,
        }),
      ),
    ),
  );
  productList = computed(() => this.products()?.data ?? []);
  productLength = computed(() => this.productList().length);
  router = inject(Router);

  searchProduct() {
    if (this.searchTerm()) {
      this.router.navigate(['/products'], { queryParams: { search: this.searchTerm() } });
      this.searchTerm.set('');
    }
  }
}
