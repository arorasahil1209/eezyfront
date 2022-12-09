import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {configUrls} from '../../sharedservices/config';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  
  addCustomer(body:any){
    return this.http.post(configUrls.addCustomerURL,body)
    .pipe(
      catchError(this.handleError)
    )
  }

  deleteCustomer(body:any){
    return this.http.post(configUrls.removeCustomerURL,body)
    .pipe(
      catchError(this.handleError)
    )
  }


  getCustomerList(){
    return this.http.get(configUrls.customerListURL)
    .pipe(
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
      console.log('server side error',error);
      errorMessage = `Error Code: ${error.status} Message: ${error.error.message}`;
    }
    
    return throwError(error);
  }
}
