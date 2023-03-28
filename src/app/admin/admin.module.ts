import { NgModule } from '@angular/core';
import { AdminMainComponent } from './components/main-panel/admin-main.component';
import { ProductsPanelComponent } from './components/products-panel/products-panel.component';
import { OrdersPanelComponent } from './components/orders-panel/orders-panel.component';
import { BrowserModule } from '@angular/platform-browser';
import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { ProductDetailsPanelComponent } from './components/product-details-panel/product-details-panel.component';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { OrderDetailsPanelComponent } from './components/order-details-panel/order-details-panel.component';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { StatusSelectComponent } from './components/status-select/status-select.component';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzInputModule } from 'ng-zorro-antd/input';
import { EditableFieldComponent } from './components/editable-field/editable-field.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [
    AdminMainComponent,
    ProductsPanelComponent,
    ProductDetailsPanelComponent,
    OrdersPanelComponent,
    SidebarComponent,
    OrderDetailsPanelComponent,
    StatusSelectComponent,
    EditableFieldComponent,
  ],
  imports: [
    BrowserModule,
    AdminRoutingModule,
    NzIconModule,
    NzTableModule,
    NzSelectModule,
    FormsModule,
    NzDescriptionsModule,
    NzResultModule,
    NzButtonModule,
    NzBadgeModule,
    NzInputModule,
    NzSpinModule,
  ],
  providers: [],
})
export class AdminModule {}
