import { Component, computed, inject, input } from '@angular/core';
import { ProductImagePreview } from '../../components/product-image-preview/product-image-preview';
import { ProductInfoPreview } from '../../components/product-info-preview/product-info-preview';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ProductImage } from '../../interfaces/productImage';

@Component({
  selector: 'app-product-detail-page',
  imports: [ProductImagePreview, ProductInfoPreview],
  templateUrl: './product-detail-page.html',
  styleUrl: './product-detail-page.css',
})
export class ProductDetailPage {
  productService = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);

  // idProduct = toSignal(this.activatedRoute.params.pipe(map((params) => params['id'])), {
  //   initialValue: '',
  // });
  id = input<string>('');

  productResource = rxResource({
    params: () => ({
      idProduct: this.id(),
    }),
    stream: ({ params: { idProduct } }) => this.productService.getProductById(idProduct),
  });

  productImages = computed(() => {
    const productImage: ProductImage = {
      productId: this.productResource.value()?.id ?? '',
      image: this.productResource.value()?.image ?? '',
      featured: true,
    };

    const firstExtraProductImage: ProductImage = {
      productId: this.productResource.value()?.id ?? '',
      image: '/img/product/3.jpg',
      featured: false,
    };

    const secondExtraProductImage: ProductImage = {
      productId: this.productResource.value()?.id ?? '',
      image: '/img/product/4.jpg',
      featured: false,
    };

    const productImages: ProductImage[] = [
      productImage,
      firstExtraProductImage,
      secondExtraProductImage,
    ];
    return productImages;
  });
}
