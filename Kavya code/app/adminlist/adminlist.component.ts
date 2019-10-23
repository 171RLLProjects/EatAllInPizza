import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { Admin } from '../admin';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminlistComponent implements OnInit {

  admins: Admin[];

  constructor(private _adminService: AdminService, private router: Router) { }

  ngOnInit() {

    this._adminService.getAdmins().subscribe(
      admins => {
        this.admins = admins;
      });
    console.log(this.admins);
  }

  delete(admin: Admin): void {

    this._adminService.deleteadmin(admin.aid).subscribe(data => {
      this.admins = this.admins.filter(u => u !== admin);

    });
  }
  edit(admin: Admin): void {

    this.router.navigate(['/addAdmin/', admin]);
  }

}