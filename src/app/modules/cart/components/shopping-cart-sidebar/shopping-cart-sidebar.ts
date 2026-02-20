import { Component, inject, signal } from '@angular/core';
import { CartsidebarService } from '../../services/cartsidebar-service';
import { Store } from '@ngrx/store';
import { Product } from '@/app/modules/product/interfaces/product';

@Component({
  selector: 'app-shopping-cart-sidebar',
  imports: [],
  templateUrl: './shopping-cart-sidebar.html',
  styleUrl: './shopping-cart-sidebar.css',
})
export class ShoppingCartSidebar {
  store = inject(Store);
  cartsidebarService = inject(CartsidebarService);
  totalProducts = signal(0);
  productsInCart = signal<Product[]>([]);

  // clearCart() {}

  addQuantity() {}

  restQuantity() {}
}
