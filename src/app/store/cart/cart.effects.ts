import { inject, Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { CartActions, CartLocalStorageActions } from './cart.actions';

import { mergeMap, tap, withLatestFrom } from 'rxjs';

import { Store } from '@ngrx/store';

import { selectCartItems } from './cart.selector';

import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class CartEffects {
  store = inject(Store);

  action = inject(Actions);

  saveCart$ = createEffect(
    () => {
      return this.action.pipe(
        ofType(CartActions.addProduct, CartActions.removeProduct, CartActions.clearCart),

        withLatestFrom(this.store.select(selectCartItems)),

        tap(([, state]) => {
          this.store.dispatch(
            CartLocalStorageActions.saveCartInLocalStorage({ products: [...state] }),
          );
        }),
      );
    },

    {
      dispatch: false,
    },
  );
}
