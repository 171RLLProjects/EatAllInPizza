import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shop } from '../shop';
import { Location } from '../location';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-listshop',
  templateUrl: './listshop.component.html'
})
export class ListshopComponent implements OnInit {
  shops: Shop[];

  constructor(private _customerservice: CustomerService, private router: Router) { }

  ngOnInit() {
    this._customerservice.getShops().subscribe(shops => {
      this.shops = shops;
      console.log(shops);
    })
  }
  edit(shop: Shop) {
    console.log('edit called');
    this.router.navigate(['shopAdmin/addShop/', shop]);
  }

  delete(shop: Shop) {
    console.log('delete shop');
    this._customerservice.deleteShop(shop.sid).subscribe(data => {
      this.shops=this.shops.filter(u => u!==shop);
    });
    }

}
