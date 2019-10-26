import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

  admin=new Admin;

  constructor() { }

  ngOnInit() {
  }

  addadmin()
  {

  }
}
