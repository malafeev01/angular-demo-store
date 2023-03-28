import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/common/services/api-service/api.service';
import { ErrorResponse, Product } from 'src/app/common/services/common-types';

@Component({
  selector: 'product-details-panel',
  templateUrl: './product-details-panel.component.html',
  styleUrls: ['./product-details-panel.component.css'],
})
export class ProductDetailsPanelComponent implements OnInit, OnChanges {
  public product: Product | undefined;
  public error: ErrorResponse | undefined;
  public changed = false;
  public loading = true;
  public saveLoading = false;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

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
          this.loading = false;
        },
      });
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  public onProductChange() {
    this.changed = true;
  }

  public saveProduct() {
    if (!this.product) return;
    this.saveLoading = true;
    this.apiService.updateProduct$(this.product).subscribe({
      next: () => {
        this.changed = false;
        this.saveLoading = false;
      },
    });
  }
}
