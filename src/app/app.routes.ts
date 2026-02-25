import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/pages/init-page/init-page').then((m) => m.InitPage),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./modules/product/pages/product-list-page/product-list-page').then(
        (m) => m.ProductListPage,
      ),
  },
];
