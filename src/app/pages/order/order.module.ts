import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order/order.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
@NgModule({
  declarations: [OrderComponent, CustomerComponent, OrderDetailsComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class OrderModule { }
