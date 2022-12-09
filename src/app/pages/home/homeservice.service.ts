import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {configUrls} from '../../sharedservices/config';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  
  // getAllCategories(){
  //   return this.http.get(configUrls.getCategoiesURL)
  //   .pipe(
  //     catchError(this.handleError)
  //   )
  // }

  // addExpense( body:any){
  //   return this.http.post(configUrls.addExpense  ,body)
  //   .pipe(
  //     catchError(this.handleError)
  //   )
  // }
  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      console.log(error,'error from client side')
      //errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      console.log('server side error')
      //errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    
    return throwError(errorMessage);
  }
}
