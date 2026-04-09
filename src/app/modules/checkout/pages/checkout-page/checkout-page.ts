import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartSummary } from '../../components/cart-summary/cart-summary';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule, CartSummary],
  templateUrl: './checkout-page.html',
})
export class CheckoutPage {
  public selectedShippingCost = signal<number>(0);

  onShippingChange(cost: number): void {
    this.selectedShippingCost.set(cost);
  }

  onSubmitOrder(): void {
    console.log('Pedido realizado con costo de envío:', this.selectedShippingCost());
  }
}
