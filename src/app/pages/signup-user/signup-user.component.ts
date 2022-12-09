import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../sharedservices/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent implements OnInit {
user:any={}
  // constructor(private service:AuthService, private router:Router) { }

  ngOnInit() {
  }

  // signup(){
  //     this.service.userSignup(this.user)
  //     .subscribe((response)=>{
  //       console.log(response)
  //       this.router.navigate(['/user/login'])
  //     })
  // }

}
