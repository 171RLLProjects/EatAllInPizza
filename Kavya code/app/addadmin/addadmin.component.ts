import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {

  admin = new Admin;
  constructor(private _adminservice: AdminService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.admin.aid = this.activatedRoute.snapshot.paramMap.get('aid');
    this.admin.aname = this.activatedRoute.snapshot.paramMap.get('aname');
    this.admin.password = this.activatedRoute.snapshot.paramMap.get('password');
    this.admin.type = this.activatedRoute.snapshot.paramMap.get('type');
  }
  addadmin() {
    if (this.admin.aid == null) {
      this._adminservice.addadmin(this.admin).subscribe(data => {
        this.router.navigate(['/admins']);
      },
        error => {
          alert(error);
        }
      );
    } else {

      this._adminservice.updateadmin(this.admin).subscribe(data => {
        this.router.navigate(['/admins']);
      },
        error => {
          alert(error);
        }
      )

    }

  }
}