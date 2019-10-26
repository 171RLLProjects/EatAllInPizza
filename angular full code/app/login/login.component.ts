import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customer = new Customer;
  constructor(private _customerService: CustomerService, private router: Router) { }

  ngOnInit() {
  }

  nav() {
    console.log('nav() called');
    this.router.navigate(['/home']);
  }

  loginCustomer() {
    this._customerService.login(this.customer.cname, this.customer.pass).subscribe(
      customer => {
        if (customer !== null) {
          this.customer = customer;
          sessionStorage.setItem('sname',customer.cname);
          sessionStorage.setItem('cuid',customer.cuid);
          this.router.navigate(['/customerMenu']);
        }
        else {
          alert('Login Failed : Invalid Username or Password');
        }
        //  alert('Success Login');
        //  this.router.navigate(['/customerlist']);
      },
      error =>
        alert('Login Failed : Invalid Username or Password'));
    // if(this.customer !== null)
    // {
    //   console.log(this.customer);
    //   alert('Success Login');
    //   this.router.navigate(['/customerlist']);
    //       }
    // else{
    //   alert('Failed');
    // }
  }
}
