import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ApiService,
  Order,
} from 'src/app/common/services/api-service/api.service';
import { ErrorResponse } from 'src/app/common/services/common-types';
import {
  CartItem,
  CartService,
} from 'src/app/store/services/cart-service/cart.service';

@Component({
  selector: 'app-order-details-panel',
  templateUrl: './order-details-panel.component.html',
  styleUrls: ['./order-details-panel.component.css'],
})
export class OrderDetailsPanelComponent implements OnInit {
  public order: Order | undefined;
  public error: ErrorResponse | undefined;
  public loading = true;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private cartService: CartService
  ) {}

  public ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const orderId = params['id'];

      this.apiService.getOrder$(parseInt(orderId)).subscribe({
        next: (order: Order) => {
          this.order = order;
          this.loading = false;
        },
        error: (error: ErrorResponse) => {
          this.error = error;
          this.loading = false;
        },
      });
    });
  }

  public getPrice(cartItem: CartItem): number {
    return this.cartService.getPrice(cartItem);
  }

  public getTotal(): number | undefined {
    const initialValue = 0;
    return this.order?.cart.reduce(
      (prevValue, currentValue) =>
        prevValue + currentValue.count * currentValue.product.price,
      initialValue
    );
  }
}
