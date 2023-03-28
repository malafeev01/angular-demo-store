import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartGuard } from './guards/cart-guard/cart.guard';
import { OrderDetailsComponent } from './components/order-details-panel/order-details.component';
import { ProductViewPanelComponent } from './components/product-details-panel/product-view-panel.component';
import { StoreMainComponent } from './components/main-panel/store-main.component';

const routes: Routes = [
  { path: '', component: StoreMainComponent },
  { path: 'products/:id', component: ProductViewPanelComponent },
  { path: 'order', component: OrderDetailsComponent, canActivate: [CartGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
