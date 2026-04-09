import { Component, inject, computed, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartProducts, selectCartTotal } from '@/app/store/cart/cart.selector';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [],
  templateUrl: './cart-summary.html',
})
export class CartSummary {
  private readonly store = inject(Store);

  public cartItems = this.store.selectSignal(selectCartProducts);
  public subtotal = this.store.selectSignal(selectCartTotal);
  public shippingCost = signal(0.0);
  public total = computed(() => this.subtotal() + this.shippingCost());
  formatNumber(value: number): string {
    return value.toFixed(2);
  }
  calculateItemTotal(price: number | undefined, quantity: number | undefined): string {
    const p = price ?? 0;
    const q = quantity ?? 1;
    return (p * q).toFixed(2);
  }
}
