import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../sharedservices/auth.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:any={}
  constructor(private service:AuthService ,private router :Router) { }

  ngOnInit() {
  }
loginResult:any

login(){
console.log(this.user)
  this.service.userLogin(this.user)
  .subscribe((response)=>{
    this.loginResult = response
    console.log(this.loginResult ,'login details')
    console.log(this.loginResult.status)

    if(this.loginResult.status == 200){
      localStorage.setItem('status',this.loginResult.status)
      localStorage.setItem('userEmail',this.loginResult.email)
      localStorage.setItem('token',this.loginResult.token)
      this.router.navigate(['/customer/list'])
      
      console.log('user is logged in successfully!!')
      
    }

  },(error)=>{
    console.log(error,'this is the error')
    Swal.fire('Invalid username or password, please try again later with valid credentials')
  })
}

Signup(){
  this.router.navigate(['/signup'])
}

}
