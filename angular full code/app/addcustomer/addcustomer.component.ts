import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  customer = new Customer;
  constructor(private _customerService: CustomerService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    if(this.customer.cuid !== null)
    {
      this.customer.cuid = this.activateRoute.snapshot.paramMap.get('cuid');
      this.customer.cname = this.activateRoute.snapshot.paramMap.get('cname');
      this.customer.pass = this.activateRoute.snapshot.paramMap.get('pass');
      this.customer.mobile = +this.activateRoute.snapshot.paramMap.get('mobile');
      this.customer.email = this.activateRoute.snapshot.paramMap.get('email');
      this.customer.address = this.activateRoute.snapshot.paramMap.get('address');
      this.customer.pincode = +this.activateRoute.snapshot.paramMap.get('pincode');
      this.customer.country = this.activateRoute.snapshot.paramMap.get('country');
      this.customer.creditcard = this.activateRoute.snapshot.paramMap.get('creditcard');
    }
  }

  nav() {
    console.log('nav() called');
    this.router.navigate(['/home']);
  }

  addCustomer() {
    this.customer = {
      "cuid": this.customer.cuid,
      "cname": this.customer.cname,
      "pass": this.customer.pass,
      "mobile": this.customer.mobile,
      "email": this.customer.email,
      "address": this.customer.address,
      "pincode": this.customer.pincode,
      "country": this.customer.country,
      "creditcard": this.customer.creditcard
    };
    if (this.customer.cuid == null) {
      this._customerService.addCustomer(this.customer).subscribe(
        data => {
          alert("Succesfully SignedUP");
          this.router.navigate(['home']);
        },
        error => {
          alert(error);
        });
    } else {
      this._customerService.updateCustomer(this.customer).subscribe(
        data => {
          this.router.navigate(['home']);
        },
        error => {
          alert(error);
        });
    }
  }


}
