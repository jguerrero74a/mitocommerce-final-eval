import { Product } from '@/app/modules/product/interfaces/product';
import { createReducer, on } from '@ngrx/store';
import { CartActions, CartLocalStorageActions } from './cart.actions';

export const initialState: Product[] = [];
const CART_STORAGE_KEY = 'cart';

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addProduct, (state, { product }) => {
    const productInCart = state.find((p) => p.id === product.id) ?? { ...product, quantity: 0 };
    const productAdd: Product = { ...productInCart, quantity: (productInCart?.quantity ?? 0) + 1 };
    const stateWithoutProduct = state.filter((p) => p.id !== product.id);
    return [...stateWithoutProduct, productAdd];
  }),
  on(CartActions.removeProduct, (state, { productId }) => {
    const productInCart = state.find((p) => p.id === productId);
    if (!productInCart) return state;

    if (productInCart.quantity === 1) return state.filter((product) => product.id !== productId);

    const productRemove: Product = {
      ...productInCart,
      quantity: (productInCart?.quantity ?? 0) - 1,
    };
    const stateWithoutProduct = state.filter((p) => p.id !== productId);
    return [...stateWithoutProduct, productRemove];
  }),
  on(CartActions.clearCart, () => {
    return [];
  }),
  on(CartLocalStorageActions.loadCartFromLocalStorage, () => {
    const cart = localStorage.getItem(CART_STORAGE_KEY);
    return cart ? JSON.parse(cart) : [];
  }),
  on(CartLocalStorageActions.saveCartInLocalStorage, (_, { products }) => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(products));
    return products;
  }),
);
