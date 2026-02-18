import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { CategoriesFeaturedService } from '@/app/modules/category/services/categories-featured.service';
import { Store } from '@ngrx/store';
import { selectCartCount } from '@/app/store/cart/cart.selector';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  private sidebarService = inject(SidebarService);
  private categoriesFeaturedService = inject(CategoriesFeaturedService);
  categories = this.categoriesFeaturedService.categories;

  store = inject(Store);
  cartCount = this.store.selectSignal(selectCartCount);

  openSidebar() {
    this.sidebarService.open();
  }
}
