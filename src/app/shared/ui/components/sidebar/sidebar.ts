import { Component, inject, signal } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { CategoriesFeaturedService } from '@/app/modules/category/services/categories-featured.service';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  sidebarService = inject(SidebarService);
  isOpen = this.sidebarService.isOpen;

  private categoriesFeaturedService = inject(CategoriesFeaturedService);
  categories = this.categoriesFeaturedService.categories;

  onClose(): void {
    this.sidebarService.close();
  }

  onOverlayClick(): void {
    this.sidebarService.close();
  }
}
