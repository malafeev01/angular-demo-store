import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreRoutingModule } from './store/store-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { LoginPanelComponent } from './common/components/login-panel/login-panel.component';

const routes: Routes = [{ path: 'login', component: LoginPanelComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreRoutingModule,
    AdminRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
