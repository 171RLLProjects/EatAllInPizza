import { Component, OnInit } from '@angular/core';
import { Shop } from '../shop';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-menu',
  templateUrl: './customer-menu.component.html',
  styleUrls: ['./customer-menu.component.css']
})
export class CustomerMenuComponent implements OnInit {
  shop: Shop[]
  cname: string;
  cuid: string;
  oid:string;
  constructor(private _customerservice: CustomerService, private router: Router) { }

  ngOnInit() {
    this.cname = sessionStorage.getItem('sname');
    this.cuid = sessionStorage.getItem('cuid');
    sessionStorage.setItem('cuid',this.cuid);
    this._customerservice.getShops().subscribe(shop => {
      this.shop = shop;
    });
  }

  viewFoods(shop: Shop) {
    console.log('viewFoods() clicked');
    sessionStorage.setItem('shopName', shop.sname);
    this.router.navigate(['foodMenu/', shop]);
  }

  logout(){
    alert('You are Logged Out');
    this.router.navigate(['home']);
  }
}
