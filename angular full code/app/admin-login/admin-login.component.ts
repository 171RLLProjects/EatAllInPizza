import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CustomerService } from '../customer.service';
import { Admin } from '../admin';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admin = new Admin;
  constructor(private _customerService: CustomerService, private router: Router) { }

  ngOnInit() {

  }

  loginAdmin() {
    this._customerService.loginAdmin(this.admin.aname, this.admin.password).subscribe(
      admin => {
        if(admin !== null)
          { this.admin = admin;
            if( admin.type === 'ShopAdmin'){
              this.router.navigate(['/shopAdmin']);
            }else if (admin.type === 'FoodAdmin'){
              this.router.navigate(['/foodAdmin']);
            }else if(admin.type === 'StatusAdmin'){
              this.router.navigate(['/statusAdmin']);
            }
          }
          else
          {
            alert(' Login Failed : Invalid Username or Password ');
          }
        //  alert('Success Login');
        //  this.router.navigate(['/customerlist']);
      },
      error =>
        alert('Failed') );
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

  nav() {
    console.log('nav() called');
    this.router.navigate(['/home']);
  }
}
