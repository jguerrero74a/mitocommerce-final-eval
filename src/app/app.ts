import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/ui/components/navbar/navbar';
import { Sidebar } from './shared/ui/components/sidebar/sidebar';
import { Footer } from './shared/ui/components/footer/footer';
import { ShoppingCartSidebar } from './modules/cart/components/shopping-cart-sidebar/shopping-cart-sidebar';
import { Store } from '@ngrx/store';
import { CartLocalStorageActions } from './store/cart/cart.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Sidebar, Footer, ShoppingCartSidebar],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private store = inject(Store);

  constructor() {
    this.store.dispatch(CartLocalStorageActions.loadCartFromLocalStorage());
  }
}
