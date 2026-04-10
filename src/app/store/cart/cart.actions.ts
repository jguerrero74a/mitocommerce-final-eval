import { Product } from '@/app/modules/product/interfaces/product';
import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';

export const CartActions = createActionGroup({
  source: 'Cart',
  events: {
    'Add Product': props<{ product: Product }>(),
    'Remove Product': props<{ productId: string }>(),
    'Clear Cart': emptyProps,
    'Toggle Sidebar': props<{ open: boolean }>(),
  },
});

export const CartLocalStorageActions = createActionGroup({
  source: 'Cart LocalStorage',
  events: {
    'Load Cart from LocalStorage': props<{ products: Product[] }>(),
    'Save Cart in LocalStorage': props<{ products: Product[] }>(),
  },
});

export const clearCart = createAction('[Cart] Clear Cart');
