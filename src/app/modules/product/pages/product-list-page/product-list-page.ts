import { Component, signal } from '@angular/core';
import { ProductFilters } from '../../components/product-filters/product-filters';
import { ProductList } from '../../components/product-list/product-list';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-list-page',
  imports: [ProductFilters, ProductList],
  template: `
    <section class="section-shop py-[100px] max-[1200px]:py-[50px]">
      <div
        class="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1500px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]"
      >
        <div class="w-full flex mb-[-30px]">
          <div class="w-1/3">
            <app-product-filters></app-product-filters>
          </div>
          <div class="w-2/3">
            <app-product-list [products]="products()"></app-product-list>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class ProductListPage {
  products = signal<Product[]>([
    {
      id: '1',
      name: 'Product 1',
      price: 100,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Category 1',
      rating: 4.5,
      stock: 10,
    },
    {
      id: '2',
      name: 'Product 2',
      price: 200,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Category 2',
      rating: 4.5,
      stock: 10,
    },
    {
      id: '3',
      name: 'Product 3',
      price: 300,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Category 3',
      rating: 4.5,
      stock: 10,
    },
    {
      id: '4',
      name: 'Product 4',
      price: 400,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Category 4',
      rating: 4.5,
      stock: 10,
    },
    {
      id: '5',
      name: 'Product 5',
      price: 500,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Category 5',
      rating: 4.5,
      stock: 10,
    },
    {
      id: '6',
      name: 'Product 6',
      price: 600,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Category 6',
      rating: 4.5,
      stock: 10,
    },
    {
      id: '7',
      name: 'Product 7',
      price: 700,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Category 7',
      rating: 4.5,
      stock: 10,
    },
    {
      id: '8',
      name: 'Product 8',
      price: 800,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Category 8',
      rating: 4.5,
      stock: 10,
    },
    {
      id: '9',
      name: 'Product 9',
      price: 900,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Category 9',
      rating: 4.5,
      stock: 10,
    },
    {
      id: '10',
      name: 'Product 10',
      price: 1000,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      category: 'Category 10',
      rating: 4.5,
      stock: 10,
    },
  ]);
}
