import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/services/common-types';
import {
  Cart,
  CartItem,
  CartService,
} from '../../services/cart-service/cart.service';

@Component({
  selector: 'cart-panel',
  templateUrl: './cart-panel.component.html',
  styleUrls: ['./cart-panel.component.css'],
})
export class CartPanelComponent implements OnInit {
  @Input() show = false;

  public get cart(): Cart {
    return this.cartService.cart;
  }

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {}

  public closeCart(): void {
    this.cartService.closeCart();
  }

  public getPrice(cartItem: CartItem): number {
    return this.cartService.getPrice(cartItem);
  }

  public removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);
  }

  public getTotal(): number {
    return this.cartService.getTotal();
  }

  public confirmOrder(): void {
    this.cartService.closeCart();
    this.router.navigate(['order']);
  }
}
