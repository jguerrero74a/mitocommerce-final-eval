import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CartActions } from './cart.actions';
import { tap } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class CartEffects {
  store = inject(Store);
  action = inject(Actions);

  saveCart$ = createEffect(() => {
    return this.action.pipe(
      ofType(CartActions.addProduct, CartActions.removeProduct, CartActions.clearCart),
      tap(() => {
        console.log('Cart updated');
      }),
    );
  });
}
