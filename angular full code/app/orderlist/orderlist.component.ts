import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Order } from '../order';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html'
})
export class OrderlistComponent implements OnInit {
  orders: Order[];
  order = new Order;
  constructor(private _customerservice: CustomerService, private _router: Router) { }
  ngOnInit() {
    this._customerservice.getAllOrders().subscribe(
      orders => {
        this.orders = orders;
      });
  }

  updateStatus(order: Order) {
    console.log('updateStatus() called');
    this.order = order;
    this.order = {
      "oid": this.order.oid,
      "customer": {
        "cuid": this.order.customer.cuid,
        "cname": "",
        "pass": "",
        "mobile": 123,
        "email": "",
        "address": "",
        "pincode": 609602,
        "country": "",
        "creditcard": ""
      },
      "shop": {
        "sid": this.order.shop.sid,
        "sname": "ByeBye",
        "location":
        {
          "lid": "LO_002",
          "lname": "Chennai"
        }
      },
      "total": this.order.total,
      "orderstatus": "Delivered"
    }
    if (order.orderstatus === "Cancelled") {
      alert('Cancelled Orders status can not be update!');
    }
    else {
      this._customerservice.updateorder(this.order).subscribe(
        order => {
          console.log(this.order);
          this.orders = this.orders.filter(u => u !== order);
          window.location.reload();
        });

    }

  }

}
