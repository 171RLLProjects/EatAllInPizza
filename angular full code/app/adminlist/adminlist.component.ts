import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html'
})
export class AdminlistComponent implements OnInit {

  admins: Admin[];

  constructor(private _customerservice: CustomerService, private router: Router) { }

  ngOnInit() {

    this._customerservice.getAdmins().subscribe(
      admins => {
        this.admins = admins;
      });
    console.log(this.admins);
  }

  delete(admin: Admin): void {
    this._customerservice.deleteadmin(admin.aid).subscribe(data => {
      this.admins = this.admins.filter(u => u !== admin);
    });
  }
  
  edit(admin: Admin): void {

    this.router.navigate(['statusAdmin/addAdmin/', admin]);
  }
}