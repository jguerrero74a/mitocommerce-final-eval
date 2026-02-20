import { Component, inject } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { toSignal } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Component({
  selector: 'app-popular-products',
  imports: [ProductCard],
  templateUrl: './popular-products.html',
  styleUrl: './popular-products.css',
})
export class PopularProducts {
  products = toSignal(
    of([
      {
        id: '1',
        name: 'Product 1',
        price: 10,
        image:
          'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      },
    ]),
  );
}
