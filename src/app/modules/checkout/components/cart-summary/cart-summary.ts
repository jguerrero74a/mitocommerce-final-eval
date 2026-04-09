import { Component, inject, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectCartProducts, selectCartTotal } from '@/app/store/cart/cart.selector';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-summary.html',
})
export class CartSummary {
  private readonly store = inject(Store);

  public cartItems = this.store.selectSignal(selectCartProducts);
  public subtotal = this.store.selectSignal(selectCartTotal);

  public shippingCost = input<number>(0);

  public total = computed(() => this.subtotal() + this.shippingCost());

  calculateItemTotal(price: number | undefined, quantity: number | undefined): number {
    return (price ?? 0) * (quantity ?? 1);
  }
}
