import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Shop } from './shop';
import { Location } from './location';

@Injectable({
  providedIn: 'root'
})
export class ShopadminService {
  headers = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'
    })
  }

  constructor(private _http: HttpClient) { }
  
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
    return this._http.get<Location>(`http://172.21.40.26:3333/EatAllInPizza/locationbyid/` +lid)
  }
  getLocationByName(lname: string) {
    return this._http.get<Location>(`http://172.21.40.26:3333/EatAllInPizza/locationbyname/` +lname)
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
    return this._http.delete(`http://172.21.40.26:3333/EatAllInPizza/shop` +sid);
  }

  updateShop(shop: Shop) {
    return this._http.put('http://172.21.40.26:3333/EatAllInPizza/updateshop', JSON.stringify(shop), this.headers);
  }

  getShopById(sid: string) {
    return this._http.get<Shop>(`http://172.21.40.26:3333/EatAllInPizza/shopbyid/` +sid);
  }
  getShopByName(sname: string) {
    return this._http.get<Shop>(`http://172.21.40.26:3333/EatAllInPizza/shopbyname/` +sname);
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
