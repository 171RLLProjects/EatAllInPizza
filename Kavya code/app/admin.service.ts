import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from './admin';
import { Observable,throwError  } from 'rxjs';
import { Order } from './order';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  headers = {

    headers: new HttpHeaders({

      'Content-Type': 'application/json'

    })
  };

  constructor(private _http: HttpClient) { }

  login(aname: string, pass: string) {
    console.log('login called' + aname +' '+pass);
    return this._http.get<Admin>(`http://172.21.40.26:3333/EatAllInPizza/logina/` + aname + `/` + pass)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  addadmin(admin: Admin)
  {
   
    return this._http.post('http://172.21.40.26:3333/EatAllInPizza/admin',JSON.stringify(admin),this.headers) .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  updateadmin(admin: Admin)
  {
    return this._http.put('http://172.21.40.26:3333/EatAllInPizza/admin',JSON.stringify(admin),this.headers) .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  deleteadmin(aid: string)
  {
    return this._http.delete('http://172.21.40.26:3333/EatAllInPizza/admin/'+aid) .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getAdmins(): Observable<Admin[]> {

    console.log('service for getadmin');
    return this._http.get<Admin[]>('http://172.21.40.26:3333/EatAllInPizza/admins') .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getadminbyid(aid: Admin)
  {
    return this._http.get<Admin>(`http://172.21.40.26:3333/EatAllInPizza/admins`+aid) .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getadminbytype(type : Admin)
  {
    return this._http.get<Admin[]>(`http://172.21.40.26:3333/EatAllInPizza/adminsbytype`+type) .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  addorder(order : Order)
  {
    return this._http.post('http://172.21.40.26:3333/EatAllInPizza/order',JSON.stringify(order),this.headers) .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  updateorder(order : Order)
  {
    return this._http.put('http://172.21.40.26:3333/EatAllInPizza/order',JSON.stringify(order),this.headers) .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

 deleteorder(oid : string)
 {
  return this._http.delete('http://172.21.40.26:3333/EatAllInPizza/order/'+oid) .pipe(
    retry(1),
    catchError(this.handleError)
  );
 }

 getorderbyid(oid : Order)
 {
   return this._http.get<Order[]>(`http://172.21.40.26:3333/EatAllInPizza/order/`+oid) .pipe(
    retry(1),
    catchError(this.handleError)
  );
 }

 getorderbytype(type : string)
 {
   return this._http.get<Order[]>('http://172.21.40.26:3333/EatAllInPizza/order/'+type) .pipe(
    retry(1),
    catchError(this.handleError)
  );
 }
 handleError(error) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // client-side error
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}
}
