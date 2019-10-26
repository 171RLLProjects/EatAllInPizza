import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  customers: Customer[];
  constructor(private _customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this._customerService.customerList().subscribe(
      customers => {
        this.customers = customers;
      });
  }

  delete(customer: Customer): void {
    this._customerService.deleteCustomer(customer.cuid).subscribe(
      data => {
        this.customers = this.customers.filter(u => u !== customer);
      });
  }
  edit(customer: Customer) {
    this.router.navigate(['/addcustomer/', customer]);
  }
}
