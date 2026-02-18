import { Product } from '@/app/modules/product/interfaces/product';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CartActions = createActionGroup({
  source: 'Cart',
  events: {
    'Add Product': props<{ product: Product }>(),
    'Remove Product': props<{ productId: string }>(),
    'Clear Cart': emptyProps,
  },
});
