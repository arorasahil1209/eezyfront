import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
import Swal from 'sweetalert2'
import { Router} from '@angular/router';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  body:any={}
  response:any={}
  constructor(private service : CustomerService,private router:Router) { }

  ngOnInit(): void {
    this.getList();
  }
  getList(){
    this.service.getCustomerList().subscribe((response:any)=>{
      this.response = response
      this.response = response.response
      console.log('response::',this.response)
    },(error)=>{
      console.log('error while getting customer list',error.status);
      if(error.status === 401){
        this.router.navigate(['/user/login'])
      }
    })
  }

  saveCustomer(){
    console.log('save customer',this.body);
    this.service.addCustomer(this.body)
    .subscribe((response)=>{
      console.log(response)
      Swal.fire('Customer Added Successfully')
      this.body={};
      this.getList()
    },(error)=>{
      console.log("error:::",error)
      Swal.fire(JSON.stringify(error.error.message))
    })
  }
  deleteCustomer(id:any){
    console.log('id:::',id);
    this.service.deleteCustomer({
      customerId:id
    })
    .subscribe((response)=>{
      console.log(response)
      Swal.fire('Customer removed Successfully')
      this.body={};
      this.getList()
    },(error)=>{
      console.log("error:::",error)
      Swal.fire(JSON.stringify(error.error.message))
    })
  }
  authorize(id:any){
    console.log('id:::',id);
    window.open("https://sellercentral.amazon.in/apps/authorize/consent?application_id=amzn1.sp.solution.924d8fd7-be2f-4bd0-bf05-5d90f40a9c53&state=stateexample&version=beta");
  }
}
