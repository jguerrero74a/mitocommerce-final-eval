import { afterNextRender, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/ui/components/navbar/navbar';
import { Sidebar } from './shared/ui/components/sidebar/sidebar';
import { Footer } from './shared/ui/components/footer/footer';
import { ShoppingCartSidebar } from './modules/cart/components/shopping-cart-sidebar/shopping-cart-sidebar';
import { Store } from '@ngrx/store';
import { CartLocalStorageActions } from './store/cart/cart.actions';
import { ChatBot } from './shared/ui/components/chat-bot/chat-bot';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Sidebar, Footer, ShoppingCartSidebar, ChatBot],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private store = inject(Store);

  constructor() {
    afterNextRender(() => {
      const savedCart = localStorage.getItem('cart');
      const products = savedCart ? JSON.parse(savedCart) : [];
      this.store.dispatch(CartLocalStorageActions.loadCartFromLocalStorage({ products }));
    });
  }
}
