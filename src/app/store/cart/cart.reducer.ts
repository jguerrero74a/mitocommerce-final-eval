import { Product } from '@/app/modules/product/interfaces/product';
import { createReducer, on } from '@ngrx/store';
import { CartActions, CartLocalStorageActions } from './cart.actions';

export const initialState: Product[] = [];

export const cartReducer = createReducer(
  initialState,

  // Soluciona el reordenamiento al sumar (usa .map)
  on(CartActions.addProduct, (state, { product }) => {
    const exists = state.find((p) => p.id === product.id);

    if (exists) {
      return state.map((item) =>
        item.id === product.id ? { ...item, quantity: (item.quantity ?? 0) + 1 } : item,
      );
    }

    return [...state, { ...product, quantity: 1 }];
  }),

  // Soluciona el reordenamiento al restar y error TS18048
  on(CartActions.removeProduct, (state, { productId }) => {
    const productInCart = state.find((p) => p.id === productId);

    if (!productInCart) return state;

    if (productInCart.quantity === 1) {
      return state.filter((product) => product.id !== productId);
    }

    return state.map((item) =>
      item.id === productId ? { ...item, quantity: (item.quantity ?? 1) - 1 } : item,
    );
  }),

  on(CartActions.clearCart, () => []),

  // Soluciona error TS2339 (ahora recibe el objeto products)
  on(CartLocalStorageActions.loadCartFromLocalStorage, (state, { products }) => {
    return products || [];
  }),

  on(CartLocalStorageActions.saveCartInLocalStorage, (state, { products }) => {
    return products;
  }),
);
