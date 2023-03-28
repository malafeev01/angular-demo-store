import { Component, Input } from '@angular/core';
import {
  ApiService,
  Order,
} from 'src/app/common/services/api-service/api.service';

@Component({
  selector: 'order-status-select',
  templateUrl: './status-select.component.html',
  styleUrls: ['./status-select.component.css'],
})
export class StatusSelectComponent {
  @Input() order: Order = {} as Order;

  constructor(private apiService: ApiService) {}

  public setOrderStatus() {
    if (!this.order) return;

    this.apiService.updateOrder$(this.order).subscribe();
  }
}
