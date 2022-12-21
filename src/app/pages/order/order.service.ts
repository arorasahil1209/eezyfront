import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {configUrls} from '../../sharedservices/config';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  
  getOrderList(data:any){
    return this.http.get(configUrls.orderListURL+`?customerId=${data}`)
    .pipe(
      catchError(this.handleError)
    )
  } 

  getOrderDetail(data:any){
    return this.http.get(configUrls.orderDetailURL+`?customerId=${data.customerId}&orderId=${data.orderId}`)
    .pipe(
      catchError(this.handleError)
    )
  }

  saveCustomerDetails(body:any){
    return this.http.post(configUrls.addCustomerURL,body)
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
