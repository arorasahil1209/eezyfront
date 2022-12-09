import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router :Router) { }
  title = 'Eezy';
  login(){
    this.router.navigate(['/user/login'])
  }
  getOrders(){
    this.router.navigate(['/order/lists'])
  }
  getCustomers(){
    this.router.navigate(['/customer/list'])
  }
}
