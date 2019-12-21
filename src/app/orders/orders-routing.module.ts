import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderDetailsComponent} from '../orders/order-details/order-details.component';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
  { path: '', component: OrdersComponent, children:[{
          path:'orderDetails',component:OrderDetailsComponent
          }] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { 
 
}
