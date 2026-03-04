import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductInfoPreview } from './product-info-preview';
import { Product } from '../../interfaces/product';

const mockProduct: Product = {
  id: '2',
  name: 'Test Product',
  price: 100,
  category: 'Test Category',
  rating: 4,
  image: 'test.jpg',
};

describe('ProductInfoPreview', () => {
  let fixture: ComponentFixture<ProductInfoPreview>;
  let component: ProductInfoPreview;
  let compiledElement: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductInfoPreview],
    });
    fixture = TestBed.createComponent(ProductInfoPreview);
    component = fixture.componentInstance;
    compiledElement = fixture.nativeElement;

    fixture.componentRef.setInput('product', mockProduct);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the information of the product', () => {
    const productNameElement = compiledElement.querySelector('#product-name');
    expect(productNameElement?.textContent?.trim()).toBe(mockProduct.name);
  });

  it('should return the amount of rating', () => {
    expect(component.ratingArray()).toHaveLength(mockProduct.rating ?? 0);
  });

  it('should render 5 stars if the rating is 5', () => {
    fixture.componentRef.setInput('product', { ...mockProduct, rating: 5 });
    fixture.detectChanges();

    const ratingStarElements = compiledElement.querySelectorAll('#rating-star');
    expect(ratingStarElements).toHaveLength(5);
  });
});
