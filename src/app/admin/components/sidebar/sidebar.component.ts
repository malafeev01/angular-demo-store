import { Component, OnInit } from '@angular/core';
import { getEntitiesCountByPredicate } from '@ngneat/elf-entities';
import {
  ApiService,
  orderStore,
} from 'src/app/common/services/api-service/api.service';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  public newOrders = 0;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    orderStore.subscribe(() => {
      this.newOrders = orderStore.query(
        getEntitiesCountByPredicate((order) => order.status === 'new')
      );
    });

    this.apiService.getOrders$().subscribe();
  }
}
