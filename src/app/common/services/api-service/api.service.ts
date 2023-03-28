import { Injectable } from '@angular/core';
import { createStore } from '@ngneat/elf';
import {
  addEntities,
  setEntities,
  updateEntities,
  withEntities,
} from '@ngneat/elf-entities';
import { delay, Observable } from 'rxjs';
import { Cart } from 'src/app/store/services/cart-service/cart.service';
import { Product } from '../common-types';
import { MOCK_ORDERS, MOCK_PRODUCTS } from '../api-mock-data';

export type Customer = {
  username: string;
  email: string;
};

export type Order = {
  customer: Customer;
  cart: Cart;
  id: number;
  status: 'new' | 'in-progress' | 'done';
};

export const orderStore = createStore(
  { name: 'orderStore' },
  withEntities<Order>()
);

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  public getProducts$(): Observable<Product[]> {
    return new Observable<Product[]>((subscriber) => {
      subscriber.next(MOCK_PRODUCTS);
      subscriber.complete();
    }).pipe(delay(1000));
  }

  public getProduct$(productId: number): Observable<Product> {
    return new Observable<Product>((subscriber) => {
      const product = MOCK_PRODUCTS.find((prod) => prod.id === productId);

      if (product) {
        return subscriber.next(product);
      } else {
        subscriber.error({
          error: 'There is no product with id ' + productId,
        });
      }

      subscriber.complete();
    }).pipe(delay(1000));
  }

  public updateProduct$(product: Product): Observable<Product> {
    return new Observable<Product>((subscriber) => {
      subscriber.next(product);
      subscriber.complete();
    }).pipe(delay(1000));
  }

  public getOrders$(): Observable<Order[]> {
    return new Observable<Order[]>((subscriber) => {
      orderStore.update(setEntities(MOCK_ORDERS));
      subscriber.next(MOCK_ORDERS);
      subscriber.complete();
    }).pipe(delay(1000));
  }

  public getOrder$(orderId: number): Observable<Order> {
    return new Observable<Order>((subscriber) => {
      const order = MOCK_ORDERS.find((ord) => ord.id === orderId);

      if (order) {
        subscriber.next(order);
      } else {
        subscriber.error({ error: 'There is no order with id ' + orderId });
      }
      subscriber.complete();
    }).pipe(delay(1000));
  }

  public createOrder$(order: Order): Observable<Order> {
    return new Observable<Order>((subscriber) => {
      order.id = Math.floor(Math.random() * 1000) + 1;
      orderStore.update(addEntities(order));
      subscriber.next(order);
      subscriber.complete();
    }).pipe(delay(1000));
  }

  public updateOrder$(order: Order): Observable<Order> {
    return new Observable<Order>((subscriber) => {
      orderStore.update(updateEntities(order.id, () => ({ ...order })));
      subscriber.next(order);
      subscriber.complete();
    }).pipe(delay(1000));
  }
}
