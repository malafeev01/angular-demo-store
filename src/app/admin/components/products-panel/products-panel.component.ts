import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/common/services/api-service/api.service';
import { Product } from 'src/app/common/services/common-types';

@Component({
  selector: 'app-products-panel',
  templateUrl: './products-panel.component.html',
  styleUrls: ['./products-panel.component.css'],
})
export class ProductsPanelComponent implements OnInit {
  public products: Product[] = [];
  public loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProducts$().subscribe({
      next: (products) => {
        this.products = products;
        this.loading = false;
      },
    });
  }

  public deleteProduct(product: any): void {
    console.log(product);
  }
}
