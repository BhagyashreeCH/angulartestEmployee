import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { HttpClientModule } from '@angular/common/http';
import { GetOrdersService } from '../services/get-orders.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [OrdersComponent, OrderDetailsComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    HttpClientModule
  ],
  providers:[GetOrdersService]
})
export class OrdersModule { }
