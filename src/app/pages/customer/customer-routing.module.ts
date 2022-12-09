import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CustomerComponent} from './customer/customer.component';
const routes: Routes = [
  {path:'list',component:CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
