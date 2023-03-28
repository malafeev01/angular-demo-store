import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  ApiService,
  Order,
} from 'src/app/common/services/api-service/api.service';
import {
  AuthService,
  User,
} from 'src/app/common/services/auth-service/auth.service';
import {
  CartItem,
  CartService,
} from '../../services/cart-service/cart.service';

@Component({
  selector: 'order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent {
  public createdOrder: Order | undefined = undefined;
  public loading = false;

  public get cart() {
    return this.cartService.cart;
  }

  public get user(): User | undefined {
    return this.authService.getCurrentUser();
  }

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router,
    private apiService: ApiService
  ) {}

  public getPrice(cartItem: CartItem): number {
    return this.cartService.getPrice(cartItem);
  }

  public getTotal(): number {
    return this.cartService.getTotal();
  }

  public cancelOrder(): void {
    this.cartService.flushCart();
    this.router.navigate(['']);
  }

  public createOrder(): void {
    if (!this.user) return;
    const order: Order = {
      id: 0,
      customer: {
        username: this.user?.username,
        email: this.user?.username,
      },
      cart: this.cart,
      status: 'new',
    };

    this.loading = true;
    this.apiService.createOrder$(order).subscribe({
      next: (createdOrder) => {
        this.loading = false;
        this.createdOrder = createdOrder;
        this.cartService.flushCart();
      },
    });
  }
}
