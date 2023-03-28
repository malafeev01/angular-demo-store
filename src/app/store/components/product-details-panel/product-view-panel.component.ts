import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/common/services/api-service/api.service';
import { AuthService } from 'src/app/common/services/auth-service/auth.service';
import { ErrorResponse, Product } from 'src/app/common/services/common-types';
import { CartService } from '../../services/cart-service/cart.service';

@Component({
  selector: 'app-product-view-panel',
  templateUrl: './product-view-panel.component.html',
  styleUrls: ['./product-view-panel.component.css'],
})
export class ProductViewPanelComponent implements OnInit {
  public product: Product | undefined;
  public error: ErrorResponse | undefined;
  public loading = true;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = params['id'];

      this.apiService.getProduct$(parseInt(productId)).subscribe({
        next: (product: Product) => {
          this.product = product;
          this.loading = false;
        },
        error: (error: ErrorResponse) => {
          this.error = error;
        },
      });
    });
  }

  public addToCart() {
    if (!this.product) return;
    this.cartService.addToCart(this.product);
  }

  public canAddToCart() {
    return this.authService.isCustomer();
  }
}
