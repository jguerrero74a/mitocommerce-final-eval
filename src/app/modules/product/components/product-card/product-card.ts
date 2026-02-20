import { Component, computed, inject, input } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { Product } from '../../interfaces/product';
import { CartActions } from '@/app/store/cart/cart.actions';

@Component({
  selector: 'app-product-card',
  imports: [NgOptimizedImage],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input<Product>({
    name: '',
    id: '0',
    price: 0,
    rating: 0,
    stock: 0,
    category: '',
    image: '',
  });
  ratingArray = computed(() => Array.from({ length: Math.round(this.product().rating ?? 0) ?? 0 }));
  store = inject(Store);

  addToCart() {
    this.store.dispatch(CartActions.addProduct({ product: this.product() }));
  }

  addToWishList() {}
}
