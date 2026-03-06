import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wishlist } from './wishlist';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { cartReducer } from '@/app/store/cart/cart.reducer';

describe('Wishlist', () => {
  let component: Wishlist;
  let fixture: ComponentFixture<Wishlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wishlist],
      providers: [
        provideHttpClient(withFetch()),
        provideStore({
          cart: cartReducer,
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Wishlist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
