import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from '../../ui/components/hero/hero';
import { PopularProducts } from '@/app/modules/product/components/popular-products/popular-products';

@Component({
  selector: 'app-init-page',
  imports: [Hero, PopularProducts],
  templateUrl: './init-page.html',
  styleUrl: './init-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InitPage {}
