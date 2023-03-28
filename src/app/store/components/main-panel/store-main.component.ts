import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../common/services/api-service/api.service';
import { AuthService } from '../../../common/services/auth-service/auth.service';
import { Product } from '../../../common/services/common-types';
import { CartService } from '../../services/cart-service/cart.service';

@Component({
  selector: 'app-store-main',
  templateUrl: './store-main.component.html',
  styleUrls: ['./store-main.component.css'],
})
export class StoreMainComponent implements OnInit {
  public products: Product[] = [];
  public loading = true;

  constructor(
    private cartService: CartService,
    private apiService: ApiService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.apiService.getProducts$().subscribe({
      next: (products) => {
        this.products = products;
        this.loading = false;
      },
    });
  }

  public canAddToCart() {
    return this.authService.isCustomer();
  }

  public showCartPanel() {
    return this.cartService.isShown;
  }

  public addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  public openProductDetails(product: Product) {
    this.router.navigate(['products', product.id]);
  }
}
