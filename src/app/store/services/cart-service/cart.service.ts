import { Injectable } from '@angular/core';
import { Product } from 'src/app/common/services/common-types';

export type CartItem = {
  product: Product;
  count: number;
};
export type Cart = CartItem[];

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public isShown = false;
  public cart: Cart = [];

  constructor() {}

  public toggleCart() {
    this.isShown = !this.isShown;
  }

  public closeCart() {
    this.isShown = false;
  }

  public addToCart(product: Product) {
    const cartItem = this.cart.find(
      (cartItem: CartItem) => cartItem.product.id === product.id
    );
    if (cartItem) {
      cartItem.count += 1;
      return;
    }

    this.cart.push({ product: product, count: 1 });
  }

  public removeFromCart(product: Product) {
    const cartItemIndex = this.cart.findIndex(
      (cartItem: CartItem) => cartItem.product.id === product.id
    );

    if (cartItemIndex > -1) {
      this.cart.splice(cartItemIndex, 1);
    }
  }

  public getPrice(cartItem: CartItem): number {
    return cartItem.product.price * cartItem.count;
  }

  public getTotal(): number {
    const initialValue = 0;
    return this.cart.reduce(
      (prevValue, currentValue) =>
        prevValue + currentValue.count * currentValue.product.price,
      initialValue
    );
  }

  public flushCart(): void {
    this.cart = [];
  }
}
