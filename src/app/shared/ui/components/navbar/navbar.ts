import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SidebarService } from '../../../services/sidebar.service';
import { CategoriesFeaturedService } from '@/app/modules/category/services/categories-featured.service';
import { Store } from '@ngrx/store';
import { selectCartCount } from '@/app/store/cart/cart.selector';
import { CartsidebarService } from '@/app/modules/cart/services/cartsidebar-service';
import { InputSearchProduct } from '@/app/modules/product/components/input-search-product/input-search-product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [InputSearchProduct, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  private sidebarService = inject(SidebarService);
  private categoriesFeaturedService = inject(CategoriesFeaturedService);
  private cartsidebarService = inject(CartsidebarService);

  categories = this.categoriesFeaturedService.categories;

  store = inject(Store);
  cartCount = this.store.selectSignal(selectCartCount);

  openSidebar() {
    this.sidebarService.open();
  }

  openCartSidebar() {
    this.cartsidebarService.open();
  }
}
