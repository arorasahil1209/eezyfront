import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
customerId:any
  constructor(private service : OrderService,private router :Router,private activateRouter :ActivatedRoute) { }
  response:any={}
  ngOnInit(): void {
    this.activateRouter.queryParams
    .subscribe(params => {
      console.log(params);
      this.customerId = params.customer;
      console.log("customer details:::",this.customerId);
    }
  );
    if(this.customerId.length > 3){
    this.getList()
    }
  }
  getList(){
    console.log('hitting now')
    this.service.getOrderList(this.customerId).subscribe((response:any)=>{
      this.response = response
      this.response = response.response.Orders
      console.log('response::',this.response)
    },(error)=>{
      console.log('error while getting customer list',error.status);
      if(error.status === 401){
        console.log('error while fetching the lists');
        // this.router.navigate(['/user/login'])
      }
    })
  }

  viewOrderDetail(orderId:any){
    console.log('order id::',orderId)
    this.router.navigate(['/order/details'],{ queryParams: { orderId: orderId ,customerId : this.customerId} })
  }

}
