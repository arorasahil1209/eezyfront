import { Component ,OnInit} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router :Router,private activateRouter :ActivatedRoute) { }
  title = 'Eezy';
  orderby: string='';
  ngOnInit(){
    // this.activateRouter.queryParams
    //   .subscribe(params => {
    //     console.log(params);
    //     this.orderby = params.spapi_oauth_code;
    //     console.log(this.orderby);
    //   }
    // );
  }
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
