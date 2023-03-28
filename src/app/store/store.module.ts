import { NgModule } from '@angular/core';

import { StoreMainComponent } from './components/main-panel/store-main.component';
import { CartPanelComponent } from './components/cart-panel/cart-panel.component';
import { ProductViewPanelComponent } from './components/product-details-panel/product-view-panel.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ChunksPipe } from '../common/pipes/chunk.pipe';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { OrderDetailsComponent } from './components/order-details-panel/order-details.component';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzResultModule } from 'ng-zorro-antd/result';
import { CartGuard } from './guards/cart-guard/cart.guard';
import { RouterModule } from '@angular/router';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [
    StoreMainComponent,
    CartPanelComponent,
    ProductViewPanelComponent,
    ChunksPipe,
    OrderDetailsComponent,
  ],
  imports: [
    NzGridModule,
    NzCardModule,
    CommonModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    NzEmptyModule,
    NzBadgeModule,
    NzDescriptionsModule,
    NzResultModule,
    RouterModule,
    NzAlertModule,
    NzCarouselModule,
    NzSpinModule,
  ],
  providers: [CartGuard],
})
export class StoreModule {}
