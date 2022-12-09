import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {configUrls} from './config';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  userLogin(body:any){
    return this.http.post(configUrls.loginURL,body)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
    
  }

  userSignup(body:any){
    return this.http.post(configUrls.signupURL,body).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      console.log(error,'error from client side')
      //errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      console.log('server side error')
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    
    return throwError(errorMessage);
  }

  //this function will  will boolean value because of !! if the user is logged in or not 
  loggedIn(){
    return !!localStorage.getItem('token')
  }

  //this function will get the token from the localstorage

  getToken(){
    return  localStorage.getItem('token')
  }
}
