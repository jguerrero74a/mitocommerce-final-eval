import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/pages/init-page/init-page').then((m) => m.InitPage),
  },
];
