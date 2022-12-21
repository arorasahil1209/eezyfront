import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {OrderComponent} from './order/order.component';
import {CustomerComponent} from './customer/customer.component';
import {OrderDetailsComponent} from './order-details/order-details.component';
const routes: Routes = [
  {path:'lists',component:OrderComponent},
  {path:'customer',component:CustomerComponent},
  {path:'details',component:OrderDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
