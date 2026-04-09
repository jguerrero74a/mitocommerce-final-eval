import { Component } from '@angular/core';
import { CartSummary } from '../../components/cart-summary/cart-summary';
import { Breadcrumb } from '@/app/shared/ui/components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CartSummary, Breadcrumb],
  templateUrl: './checkout-page.html',
})
export class CheckoutPage {}
