import { Injectable } from '@angular/core';
import { Food } from './food';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Addon } from './addon';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FoodadminService {
  headers={
   headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  constructor(private _http: HttpClient) { }


  addFood(food:Food)
  {
    console.log(food);
    console.log("service addfood");
    return this._http.post('http://172.21.40.26:3333/EatAllInPizza/addfood',JSON.stringify(food),this.headers);
    
  }


  addAddOn(addon:Addon)
  {
    console.log(addon);
    return this._http.post('http://172.21.40.26:3333/EatAllInPizza/addaddon',JSON.stringify(addon),this.headers);
    
  }

getFood():Observable<Food[]>{
  console.log('service for getfood');
  return this._http.get<Food[]>('http://172.21.40.26:3333/EatAllInPizza/getallfood');
}

getAddOn():Observable<Addon[]>{
  console.log('service for getaddon');
  return this._http.get<Addon[]>('http://172.21.40.26:3333/EatAllInPizza/getalladdon');
}


deleteFood(fid:string){
  console.log('food delete service');
  return this._http.delete(`http://172.21.40.26:3333/EatAllInPizza/deletefood/` +fid)
}

deleteAddOn(adid:string){
  console.log('addon delete service');
  return this._http.delete(`http://172.21.40.26:3333/EatAllInPizza/deleteaddon/` +adid)
}


updateFood(food: Food){
  console.log("updateFood")
  
  return this._http.put(`http://172.21.40.26:3333/EatAllInPizza/updatefood`,JSON.stringify(food),this.headers);
}

updateAddOn(addon: Addon){
  console.log("updateAddOn")
  
  return this._http.put(`http://172.21.40.26:3333/EatAllInPizza/updateaddon`,JSON.stringify(addon),this.headers);
}

  
getFoodById(fid: string):Observable<Food>
{
 console.log('service foodByid')
 return this._http.get<Food>('http://172.21.40.26:3333/EatAllInPizza/getfoodbyid'+fid);
}

getFoodByName(fname: string):Observable<Food>
{
 console.log('service foodByname')
 return this._http.get<Food>('http://172.21.40.26:3333/EatAllInPizza/getfoodbyname'+fname);
}


getAddOnById(adid: string):Observable<Addon>
{
 console.log('service addonByid')
 return this._http.get<Addon>('http://172.21.40.26:3333/EatAllInPizza/getaddonbyid'+adid);
}

getAddOnByName(adname: string):Observable<Addon>
{
 console.log('service addonByname')
 return this._http.get<Addon>('http://172.21.40.26:3333/EatAllInPizza/getaddonbyname'+adname);
}

getAddOnBType(adname: string):Observable<Addon>
{
 console.log('service addonByType')
 return this._http.get<Addon>('http://172.21.40.26:3333/EatAllInPizza/getaddonbytype'+adname);
}

}

