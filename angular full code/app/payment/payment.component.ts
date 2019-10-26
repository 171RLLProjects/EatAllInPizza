import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { Order } from '../order';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private _customerservice: CustomerService, private router: Router) { }
  orderTotal: number;
  cuid: string;
  customer: Customer;
  order = new Order;
  oid: string;

  ngOnInit() {
    this.orderTotal = +sessionStorage.getItem('orderTotal');
    this.cuid = sessionStorage.getItem('cuid');
    this.oid=sessionStorage.getItem('oid');
    sessionStorage.setItem('oid',this.oid);
    this._customerservice.getCustomerbyId(this.cuid).subscribe(
      customer =>{
        this.customer=customer;
      });
  }

  nav(){
    console.log('Payement Confirmed');
    this.router.navigate(['viewOrder/',this.order]);
  }
}
