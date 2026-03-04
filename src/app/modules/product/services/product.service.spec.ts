import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';

import { ProductService } from './product.service';
import { ProductPage } from '../interfaces/productPage';
import { Product } from '../interfaces/product';
import { environment } from '@/environments/environment';

const API = environment.apiUrl;

describe('ProductService', () => {
  let service: ProductService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(ProductService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getProducts', () => {
    const mockProductPage: ProductPage = {
      data: [{ id: '1', name: 'Laptop', price: 999 }],
      meta: { total: 1, limit: 10, page: 1 },
    };

    it('should call the search URL when searchTerm is provided', async () => {
      const result$ = firstValueFrom(service.getProducts({ searchTerm: 'laptop' }));

      const req = httpTesting.expectOne(`${API}/api/products?search=laptop`);
      expect(req.request.method).toBe('GET');
      req.flush(mockProductPage);

      const result = await result$;
      expect(result).toEqual(mockProductPage);
    });

    it('should call the category URL when searchTerm is empty', () => {
      service.getProducts({ searchTerm: '', categoryId: 3 }).subscribe((result) => {
        expect(result).toEqual(mockProductPage);
      });

      const req = httpTesting.expectOne(`${API}/api/products?categoryId=3`);
      expect(req.request.method).toBe('GET');
      req.flush(mockProductPage);
    });
  });

  describe('getProductsFeatured', () => {
    it('should call the featured products URL', () => {
      const mockProducts: Product[] = [{ id: '1', name: 'Featured Product', featured: true }];

      service.getProductsFeatured().subscribe((result) => {
        expect(result).toEqual(mockProducts);
      });

      const req = httpTesting.expectOne(`${API}/api/products/featured`);
      expect(req.request.method).toBe('GET');
      req.flush(mockProducts);
    });
  });
});
