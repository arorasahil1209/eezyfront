import { Component, OnInit } from '@angular/core';
import {OrderService} from '../order.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private service : OrderService) { }
  response:any={}
  ngOnInit(): void {
    this.getList()
  }
  getList(){
    this.service.getOrderList().subscribe((response:any)=>{
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
  }

}
