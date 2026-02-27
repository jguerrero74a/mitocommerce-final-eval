import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideStore } from '@ngrx/store';

import { PopularProducts } from './popular-products';
import { Product } from '../../interfaces/product';
import { environment } from '@/environments/environment';

const API = environment.apiUrl;

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Laptop',
    price: 999,
    rating: 3,
    stock: 5,
    category: 'Electronics',
    image: 'laptop.jpg',
  },
  {
    id: '2',
    name: 'Mouse',
    price: 29,
    rating: 4,
    stock: 20,
    category: 'Electronics',
    image: 'mouse.jpg',
  },
];

describe('PopularProducts (Integration)', () => {
  let fixture: ComponentFixture<PopularProducts>;
  let component: PopularProducts;
  let compiled: HTMLElement;
  let httpTesting: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularProducts],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideStore()],
    }).compileComponents();

    httpTesting = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(PopularProducts);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should create the component', () => {
    httpTesting.expectOne(`${API}/api/products/featured`).flush([]);
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should render one ProductCard per product returned by the service', () => {
    httpTesting.expectOne(`${API}/api/products/featured`).flush(mockProducts);
    fixture.detectChanges();

    const cards = compiled.querySelectorAll('app-product-card');
    expect(cards.length).toBe(2);
  });

  it('should display each product name inside its ProductCard', () => {
    httpTesting.expectOne(`${API}/api/products/featured`).flush(mockProducts);
    fixture.detectChanges();

    const titles = compiled.querySelectorAll('a.title');
    expect(titles[0].textContent?.trim()).toBe('Laptop');
    expect(titles[1].textContent?.trim()).toBe('Mouse');
  });

  it('should render no cards when the service returns an empty array', () => {
    httpTesting.expectOne(`${API}/api/products/featured`).flush([]);
    fixture.detectChanges();

    const cards = compiled.querySelectorAll('app-product-card');
    expect(cards.length).toBe(0);
  });
});
