import { Component, OnInit } from '@angular/core';

import {HomeService} from '../homeservice.service';
import Swal from 'sweetalert2'
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service : HomeService ,private router :Router) { }
expenseDetails:any={}
  ngOnInit() {
   // this.getCategories()
  }

  // //adding expense in database
  // Addingexpense(){
  //   this.expenseDetails.email = localStorage.getItem('userEmail')
    
  //   this.service.addExpense(this.expenseDetails)
  //   .subscribe((response)=>{
  //     console.log(response)
  //     Swal.fire('Expense Added Successfully')
  //     this.expenseDetails={}
  //   },(error)=>{
  //     console.log(error)
  //   })
  // }
  categories:any
  // getCategories(){
  //   this.service.getAllCategories()
  //   .subscribe((response)=>{
  //     this.categories=response
  //     this.categories=this.categories.response
      
  //     console.log(this.categories)
      
  //   },(error)=>{
  //     console.log(error)
  //   })
  // }

  //this function will route to list of expenses that one has occured
  viewExpense(){
      this.router.navigate(['/view/your-all-expenses'])
  }
 

}
