import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foodadmin',
  templateUrl: './foodadmin.component.html'
})
export class FoodadminComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  logout(){
    this._router.navigate(['home']);
  }

}
