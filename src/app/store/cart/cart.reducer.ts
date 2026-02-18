import { Product } from '@/app/modules/product/interfaces/product';
import { createReducer, on } from '@ngrx/store';
import { CartActions } from './cart.actions';

export const initialState: Product[] = [];

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addProduct, (state, { product }) => {
    return [...state, product];
  }),
  on(CartActions.removeProduct, (state, { productId }) => {
    return state.filter((product) => product.id !== productId);
  }),
  on(CartActions.clearCart, () => {
    return [];
  }),
);
