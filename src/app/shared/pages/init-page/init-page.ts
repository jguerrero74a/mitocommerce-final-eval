import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from '../../ui/components/hero/hero';
import { PopularProducts } from '@/app/modules/product/components/popular-products/popular-products';
import { PopularProductsSkeleton } from '@/app/modules/product/components/popular-products-skeleton/popular-products-skeleton';

@Component({
  selector: 'app-init-page',
  imports: [Hero, PopularProducts, PopularProductsSkeleton],
  templateUrl: './init-page.html',
  styleUrl: './init-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InitPage {}
