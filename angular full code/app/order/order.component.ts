import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { Addon } from '../addon';
import { Food } from '../food';
import { Order } from '../order';
import { Shop } from '../shop';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderTotal: string;
  constructor(private _customerservice: CustomerService, private router: Router) { }
  cuid: string;
  customer = new Customer;
  shop = new Shop;
  shopName: string;
  food: Food[];
  addon: Addon[];
  order = new Order;

  ngOnInit() {
    this.shopName = sessionStorage.getItem('shopName');
    this.orderTotal = sessionStorage.getItem('orderTotal');
    this.cuid = sessionStorage.getItem('cuid');

    this._customerservice.getCustomerbyId(this.cuid).subscribe(
      customer => {
        this.customer = customer;
      });

      this._customerservice.getShopByName(this.shopName).subscribe(
        shop => {
          this.shop=shop;
        }
      )
  }

  addOrder() {
    console.log('addOrder() called');
    this.order = {
      "oid": this.order.oid,
      "customer": {
        "cuid": this.customer.cuid,
        "cname": this.customer.cname,
        "pass": this.customer.pass,
        "mobile": 999999999,
        "email": "Satya@gmail.com",
        "address": "Hyderabad",
        "pincode": 600550,
        "country": "India",
        "creditcard": "4566256636553211"
      },
      "shop" : {
        "sid": this.shop.sid,
        "sname": "ByeBye",
        "location":
        {
          "lid": "LO_002",
          "lname": "Chennai"
        }
      },
      "total": +this.orderTotal,
      "orderstatus": "Accepted"
    }
  this._customerservice.addorder(this.order).subscribe(
    order =>
    {
      sessionStorage.setItem('oid',this.order.oid);
      this.router.navigate(['payment/',order]);
    }
  )
  }

  nav() {
    this.router.navigate(['foodMenu']);
  }
}
