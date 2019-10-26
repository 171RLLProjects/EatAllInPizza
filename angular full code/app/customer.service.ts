import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './customer';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Admin } from './admin';
import { Shop } from './shop';
import { Location } from './location';
import { Order } from './order';
import { Food } from './food';
import { Addon } from './addon';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  headers = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'
    })
  }
  constructor(private _http: HttpClient) { }
  login(cname: string, pass: string) {
    console.log('login called' + cname + ' ' + pass);
    return this._http.get<Customer>(`http://172.21.40.26:3333/EatAllInPizza/loginc/` + cname + `/` + pass)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  loginAdmin(aname: string, password: string) {
    console.log('login called' + aname + ' ' + password);
    return this._http.get<Admin>(`http://172.21.40.26:3333/EatAllInPizza/logina/` + aname + `/` + password)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  addCustomer(customer: Customer) {
    console.log('Customer  called');
    return this._http.post('http://172.21.40.26:3333/EatAllInPizza/register', JSON.stringify(customer), this.headers)
  }

  customerList(): Observable<Customer[]> {
    console.log('customer list called');
    return this._http.get<Customer[]>('http://172.21.40.26:3333/EatAllInPizza/getallprofiles');
  }

  deleteCustomer(cuid: string) {
    console.log('delete customer called');
    return this._http.delete(`http://172.21.40.26:3333/EatAllInPizza/deleteprofile/` + cuid);
  }
  updateCustomer(customer: Customer) {
    console.log('update customer called');
    return this._http.put('http://172.21.40.26:3333/EatAllInPizza/updateprofile', JSON.stringify(customer), this.headers)
  }

  getCustomerbyId(cuid: string) {
    console.log('getCustomerById called');
    return this._http.get<Customer>(`http://172.21.40.26:3333/EatAllInPizza/getcustomerbyid/` + cuid);
  }

  //advaitha code

  addLocation(location: Location) {
    console.log(location);
    return this._http.post('http://172.21.40.26:3333/EatAllInPizza/location', JSON.stringify(location), this.headers);
  }

  getLocations(): Observable<Location[]> {
    console.log('service from get location');
    return this._http.get<Location[]>('http://172.21.40.26:3333/EatAllInPizza/locations');
  }

  deleteLocation(lid: string) {
    return this._http.delete(`http://172.21.40.26:3333/EatAllInPizza/location/` + lid);
  }

  updateLocation(location: Location) {
    return this._http.put('http://172.21.40.26:3333/EatAllInPizza/updatelocation', JSON.stringify(location), this.headers);
  }
  getLocationById(lid: string) {
    return this._http.get<Location>(`http://172.21.40.26:3333/EatAllInPizza/locationbyid/` + lid)
  }
  getLocationByName(lname: string) {
    return this._http.get<Location>(`http://172.21.40.26:3333/EatAllInPizza/locationbyname/` + lname)
  }

  addShop(shop: Shop) {
    console.log(shop);
    return this._http.post('http://172.21.40.26:3333/EatAllInPizza/shop', JSON.stringify(shop), this.headers);

  }

  getShops(): Observable<Shop[]> {
    console.log('service from get shop');
    return this._http.get<Shop[]>('http://172.21.40.26:3333/EatAllInPizza/shops');
  }

  deleteShop(sid: string) {
    return this._http.delete(`http://172.21.40.26:3333/EatAllInPizza/shop` + sid);
  }

  updateShop(shop: Shop) {
    return this._http.put('http://172.21.40.26:3333/EatAllInPizza/updateshop', JSON.stringify(shop), this.headers);
  }

  getShopById(sid: string) {
    return this._http.get<Shop>(`http://172.21.40.26:3333/EatAllInPizza/shopbyid/` + sid);
  }
  getShopByName(sname: string) {
    return this._http.get<Shop>(`http://172.21.40.26:3333/EatAllInPizza/shopbyname/` + sname);
  }

  // kavya code
    addadmin(admin: Admin) {

    return this._http.post('http://172.21.40.26:3333/EatAllInPizza/admin', JSON.stringify(admin), this.headers).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  updateadmin(admin: Admin) {
    return this._http.put('http://172.21.40.26:3333/EatAllInPizza/admin', JSON.stringify(admin), this.headers).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  deleteadmin(aid: string) {
    return this._http.delete('http://172.21.40.26:3333/EatAllInPizza/admin/' + aid).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getAdmins(): Observable<Admin[]> {

    console.log('service for getadmin');
    return this._http.get<Admin[]>('http://172.21.40.26:3333/EatAllInPizza/admins').pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getadminbyid(aid: Admin) {
    return this._http.get<Admin>(`http://172.21.40.26:3333/EatAllInPizza/admins` + aid).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getadminbytype(type: Admin) {
    return this._http.get<Admin[]>(`http://172.21.40.26:3333/EatAllInPizza/adminsbytype` + type).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  addorder(order: Order) {
    return this._http.post('http://172.21.40.26:3333/EatAllInPizza/order', JSON.stringify(order), this.headers).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  updateorder(order: Order) {
    return this._http.put('http://172.21.40.26:3333/EatAllInPizza/order', JSON.stringify(order), this.headers).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  deleteorder(oid: string) {
    return this._http.delete('http://172.21.40.26:3333/EatAllInPizza/order/' + oid).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getorderbyid(oid: string) {
    return this._http.get<Order>(`http://172.21.40.26:3333/EatAllInPizza/order/` + oid).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getAllOrders() {
    console.log("getAllOrders() called");
    return this._http.get<Order[]>('http://172.21.40.26:3333/EatAllInPizza/orders');
  }

  //Akshatha code
  addFood(food: Food) {
    console.log(food);
    console.log("service addfood");
    return this._http.post('http://172.21.40.26:3333/EatAllInPizza/addfood', JSON.stringify(food), this.headers);

  }


  addAddOn(addon: Addon) {
    console.log(addon);
    return this._http.post('http://172.21.40.26:3333/EatAllInPizza/addaddon', JSON.stringify(addon), this.headers);

  }

  getFood(): Observable<Food[]> {
    console.log('service for getfood');
    return this._http.get<Food[]>('http://172.21.40.26:3333/EatAllInPizza/getallfood');
  }

  getAddOn(): Observable<Addon[]> {
    console.log('service for getaddon');
    return this._http.get<Addon[]>('http://172.21.40.26:3333/EatAllInPizza/getalladdon');
  }


  deleteFood(fid: string) {
    console.log('food delete service');
    return this._http.delete(`http://172.21.40.26:3333/EatAllInPizza/deletefood/` + fid)
  }

  deleteAddOn(adid: string) {
    console.log('addon delete service');
    return this._http.delete(`http://172.21.40.26:3333/EatAllInPizza/deleteaddon/` + adid)
  }


  updateFood(food: Food) {
    console.log("updateFood")
    return this._http.put('http://172.21.40.26:3333/EatAllInPizza/updatefood', JSON.stringify(food), this.headers);
  }

  updateAddOn(addon: Addon) {
    console.log("updateAddOn")

    return this._http.put('http://172.21.40.26:3333/EatAllInPizza/updateaddon', JSON.stringify(addon), this.headers);
  }


  getFoodById(fid: string): Observable<Food> {
    console.log('service foodByid')
    return this._http.get<Food>('http://172.21.40.26:3333/EatAllInPizza/getfoodbyid' + fid);
  }

  getFoodByName(fname: string): Observable<Food> {
    console.log('service foodByname')
    return this._http.get<Food>('http://172.21.40.26:3333/EatAllInPizza/getfoodbyname' + fname);
  }


  getAddOnById(adid: string): Observable<Addon> {
    console.log('service addonByid')
    return this._http.get<Addon>('http://172.21.40.26:3333/EatAllInPizza/getaddonbyid' + adid);
  }

  getAddOnByName(adname: string): Observable<Addon> {
    console.log('service addonByname')
    return this._http.get<Addon>('http://172.21.40.26:3333/EatAllInPizza/getaddonbyname' + adname);
  }

  getAddOnBType(adname: string): Observable<Addon> {
    console.log('service addonByType')
    return this._http.get<Addon>('http://172.21.40.26:3333/EatAllInPizza/getaddonbytype' + adname);
  }

  logOut() {
    sessionStorage.removeItem('sname');

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
