import { Category } from '@/app/modules/category/interfaces/category';
import { CategoryService } from '@/app/modules/category/services/category.service';
import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  private categoryService = inject(CategoryService);

  categories = toSignal<Category[]>(this.categoryService.getAll());

  constructor() {
    effect(() => {
      console.log(this.categories());
    });
  }
}
