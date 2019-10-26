import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html'
})
export class AddadminComponent implements OnInit {

  admin = new Admin;
  constructor(private _customerservice: CustomerService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.admin.aid = this.activatedRoute.snapshot.paramMap.get('aid');
    this.admin.aname = this.activatedRoute.snapshot.paramMap.get('aname');
    this.admin.password = this.activatedRoute.snapshot.paramMap.get('password');
    this.admin.type = this.activatedRoute.snapshot.paramMap.get('type');
  }

  addAdmin() {
    console.log(this.admin);
    if (this.admin.aid === null) {
      this._customerservice.addadmin(this.admin).subscribe(data => {
        this.router.navigate(['statusAdmin/adminList']);
      },
        error => {
          alert(error);
        }
      );
    }
    else {
      this._customerservice.updateadmin(this.admin).subscribe(data => {
        this.router.navigate(['statusAdmin/adminList']);
      },
        error => {
          alert(error);
        });
    }
  }
}