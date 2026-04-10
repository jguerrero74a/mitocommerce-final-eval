import { Component, signal, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearCart } from '@/app/store/cart/cart.actions';
import { CartSummary } from '../../components/cart-summary/cart-summary';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CartSummary],
  templateUrl: './checkout-page.html',
})
export class CheckoutPage {
  private readonly store = inject(Store);
  public selectedShippingCost = signal<number>(0);
  public selectedPaymentMethod = signal<string>('pago-contra-entrega');

  onShippingChange(cost: number): void {
    this.selectedShippingCost.set(cost);
  }
  onPaymentChange(method: string): void {
    this.selectedPaymentMethod.set(method);
  }
  onSubmitOrder(): void {
    console.log('Pedido realizado con costo de envío:', this.selectedShippingCost());
    this.store.dispatch(clearCart());
    this.selectedShippingCost.set(0);
    this.selectedPaymentMethod.set('pago-contra-entrega');
    alert('¡Pedido realizado y carrito vaciado!');
  }
}
