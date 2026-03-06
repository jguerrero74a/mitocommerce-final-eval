import { Component, computed, inject, input } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgOptimizedImage } from '@angular/common';
import { Product } from '../../interfaces/product';
import { CartActions } from '@/app/store/cart/cart.actions';
import { RouterLink } from '@angular/router';
import { WishlistService } from '@/app/modules/wishlist/services/wishlist.service';
import { lastValueFrom } from 'rxjs';
import { AuthService } from '@/app/modules/auth/services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  isLcp = input<boolean>(false);
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
  wishListService = inject(WishlistService);
  authService = inject(AuthService);
  router = inject(Router);

  addToCart() {
    this.store.dispatch(CartActions.addProduct({ product: this.product() }));
  }

  async addToWishList() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return;
    }
    await lastValueFrom(this.wishListService.addToWishlist(this.product().id));
  }
}
