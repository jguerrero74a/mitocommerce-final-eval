import { Component, inject } from '@angular/core';
import { CartsidebarService } from '../../services/cartsidebar-service';
import { Store } from '@ngrx/store';
import { Product } from '@/app/modules/product/interfaces/product';
import { selectCartProducts, selectCartSubtotal } from '@/app/store/cart/cart.selector';
import { CartActions } from '@/app/store/cart/cart.actions';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart-sidebar',
  imports: [RouterLink],
  templateUrl: './shopping-cart-sidebar.html',
  styleUrl: './shopping-cart-sidebar.css',
})
export class ShoppingCartSidebar {
  store = inject(Store);
  cartsidebarService = inject(CartsidebarService);
  private readonly router = inject(Router);
  productsInCart = this.store.selectSignal(selectCartProducts);
  totalProducts = this.store.selectSignal(selectCartSubtotal);

  addQuantity(product: Product) {
    this.store.dispatch(CartActions.addProduct({ product }));
  }
  restQuantity(productId: string) {
    this.store.dispatch(CartActions.removeProduct({ productId }));
  }
  goToCheckout() {
    this.store.dispatch(CartActions.toggleSidebar({ open: false }));
    this.cartsidebarService.close();
    this.router.navigate(['/checkout']);
  }
}
