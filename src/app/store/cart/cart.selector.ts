import { Product } from '@/app/modules/product/interfaces/product';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectCartItems = createFeatureSelector<readonly Product[]>('cart');

export const selectCartProducts = createSelector(selectCartItems, (state) => state);

export const selectCartCount = createSelector(selectCartProducts, (products) => products.length);

export const selectCartSubtotal = createSelector(selectCartProducts, (products) =>
  products.reduce((total, product) => total + (product?.price ?? 0) * (product?.quantity ?? 0), 0),
);
