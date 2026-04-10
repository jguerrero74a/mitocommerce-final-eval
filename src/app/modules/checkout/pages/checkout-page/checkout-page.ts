import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CartSummary } from '../../components/cart-summary/cart-summary';
import { CartActions } from '@/app/store/cart/cart.actions';
import { Router } from '@angular/router';
import { selectCartCount } from '@/app/store/cart/cart.selector';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule, CartSummary, ReactiveFormsModule],
  templateUrl: './checkout-page.html',
})
export class CheckoutPage {
  private fb = inject(FormBuilder);
  private readonly store = inject(Store);
  private router = inject(Router);
  public checkoutForm: FormGroup;
  public selectedShippingCost = signal<number>(0);
  public selectedPaymentMethod = signal<string>('pago-contra-entrega');
  public showModal = signal<boolean>(false);
  public cartCount = this.store.selectSignal(selectCartCount);
  public showEmptyCartModal = signal<boolean>(false);

  constructor() {
    this.checkoutForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      direccion: ['', [Validators.required, Validators.minLength(5)]],
      ciudad: ['Lima', Validators.required],
      codigoPostal: ['', [Validators.required, Validators.minLength(3)]],
      pais: ['Perú', Validators.required],
      estado: ['Lima', Validators.required],
    });
  }

  onShippingChange(cost: number): void {
    this.selectedShippingCost.set(cost);
  }
  onPaymentChange(method: string): void {
    this.selectedPaymentMethod.set(method);
  }
  onSubmitOrder(): void {
    if (this.cartCount() === 0) {
      this.showEmptyCartModal.set(true);
      return;
    }
    if (this.checkoutForm.valid) {
      console.log('Pedido realizado con costo de envío:', this.selectedShippingCost());
      this.store.dispatch(CartActions.clearCart());
      this.checkoutForm.reset({
        ciudad: 'Lima',
        pais: 'Perú',
        estado: 'Lima',
      });
      this.selectedShippingCost.set(0);
      this.selectedPaymentMethod.set('pago-contra-entrega');
      this.showModal.set(true);
    } else {
      this.checkoutForm.markAllAsTouched();
    }
  }
  closeModal(): void {
    this.showModal.set(false);
    this.router.navigate(['/']);
  }
  closeEmptyModal(): void {
    this.showEmptyCartModal.set(false);
  }
}
