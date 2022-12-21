import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {OrderService} from '../order.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  spapi_oauth_code: string='';
  customerId:any;
  constructor(private router :Router,private activateRouter :ActivatedRoute,private service : OrderService) { }

  ngOnInit(){
    this.activateRouter.queryParams
      .subscribe(params => {
        console.log(params);
        this.spapi_oauth_code = params.spapi_oauth_code;
        this.customerId = params.selling_partner_id
        console.log("customer details:::",this.spapi_oauth_code);
        this.saveCustomer();
      }
    );
  }
  saveCustomer(){
    let data ={
      "customerId":this.customerId,
      "spapi_oauth_code":this.spapi_oauth_code
    }
    this.service.saveCustomerDetails(data).subscribe((response:any)=>{
      console.log('response customer saved:::',response);
    }),(error:any)=>{
      console.log('error',error)
    }
  }

}
