import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html'
})
export class ShopComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  logout(){
    this._router.navigate(['home']);
  }
}
