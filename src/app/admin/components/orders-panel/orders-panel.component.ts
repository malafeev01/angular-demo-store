import { Component, OnInit } from '@angular/core';
import {
  ApiService,
  Order,
  orderStore,
} from 'src/app/common/services/api-service/api.service';

@Component({
  selector: 'app-orders-panel',
  templateUrl: './orders-panel.component.html',
  styleUrls: ['./orders-panel.component.css'],
})
export class OrdersPanelComponent implements OnInit {
  public orders: Order[] = [];
  public loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getOrders$().subscribe({
      next: (orders) => {
        this.orders = orders;
        this.loading = false;
      },
    });
  }

  public getTotal(order: Order): number | undefined {
    const initialValue = 0;
    return order?.cart.reduce(
      (prevValue, currentValue) =>
        prevValue + currentValue.count * currentValue.product.price,
      initialValue
    );
  }
}
