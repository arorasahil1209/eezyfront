import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {AuthService} from './sharedservices/auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }

  intercept(req:any,next:any){
    let authservice =this.injector.get(AuthService)
    let tokenizedRequest = req.clone({
      setHeaders:{
        Authorization:`Bearer ${authservice.getToken()}`
      }
    })
    return next.handle(tokenizedRequest)
  }
}
