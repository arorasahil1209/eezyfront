import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  response:any={}
  constructor(private service : OrderService,private router :Router,private activateRouter :ActivatedRoute) { }
  orderId:any;
  customerId:any;
  ngOnInit(): void {
    this.activateRouter.queryParams
    .subscribe(params => {
      console.log(params);
      this.orderId = params.orderId;
      this.customerId = params.customerId;      
    }
  );
    if(this.orderId.length > 3){
      this.getOrderData()
    }
  }

  getOrderData(){
    let data:any = {
      customerId:this.customerId,
      orderId:this.orderId
    }
    console.log('data:',data);
    this.service.getOrderDetail(data).subscribe((response:any)=>{
      this.response = response
      this.response = response.response.OrderItems
      console.log('response::',this.response)
    },(error)=>{
      console.log('error while getting customer list',error.status);
      if(error.status === 401){
        console.log('error while fetching the lists');
        // this.router.navigate(['/user/login'])
      }
    })
  }
}
