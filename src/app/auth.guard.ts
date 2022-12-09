import { Injectable } from '@angular/core';
import { CanActivate ,CanActivateChild,Router} from '@angular/router';
import {AuthService} from './sharedservices/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivateChild{
  constructor(private _authservice :AuthService ,private router :Router){}

  canActivateChild():any{
    if(this._authservice.loggedIn()){
      return true
    }
    else{
      this.router.navigate(['/user/login'])
    }
  }
}
