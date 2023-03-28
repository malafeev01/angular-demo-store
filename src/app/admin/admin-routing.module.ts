import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainComponent } from './components/main-panel/admin-main.component';
import { AdminGuard } from './guards/admin/admin.guard';
import { OrdersPanelComponent } from './components/orders-panel/orders-panel.component';
import { ProductsPanelComponent } from './components/products-panel/products-panel.component';
import { OrderDetailsPanelComponent } from './components/order-details-panel/order-details-panel.component';
import { ProductDetailsPanelComponent } from './components/product-details-panel/product-details-panel.component';

const routes: Routes = [
  { path: 'admin', redirectTo: '/admin/orders', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminMainComponent,
    children: [
      {
        path: 'orders',
        component: OrdersPanelComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'orders/:id',
        component: OrderDetailsPanelComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'products',
        component: ProductsPanelComponent,
        canActivate: [AdminGuard],
      },
      {
        path: 'products/:id',
        component: ProductDetailsPanelComponent,
        canActivate: [AdminGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
