import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserloginRoutingModule } from './userlogin-routing.module';
import { LoginComponent } from './login/login.component';

import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserloginRoutingModule
  ]
})
export class UserloginModule { }
