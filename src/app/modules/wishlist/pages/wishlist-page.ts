import { Component } from '@angular/core';
import { Wishlist } from '../components/wishlist/wishlist';
import { Breadcrumb } from '@/app/shared/ui/components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-wishlist-page',
  imports: [Breadcrumb, Wishlist],
  template: `
    <app-breadcrumb title="Lista de Favoritos"></app-breadcrumb>
    <app-wishlist></app-wishlist>
  `,
})
export class WishlistPage {}
