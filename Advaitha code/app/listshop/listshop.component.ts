import { Component, OnInit } from '@angular/core';
import { ShopadminService } from '../shopadmin.service';
import { Router } from '@angular/router';
import { Shop } from '../shop';
import { Location } from '../location';

@Component({
  selector: 'app-listshop',
  templateUrl: './listshop.component.html',
  styleUrls: ['./listshop.component.css']
})
export class ListshopComponent implements OnInit {
  shops: Shop[];

  constructor(private _shopadminService: ShopadminService, private router: Router) { }

  ngOnInit() {
    this._shopadminService.getShops().subscribe(shops => {
      this.shops = shops;
      console.log(shops);
    })
  }
  edit(shop: Shop) {
    console.log('edit called');
    this.router.navigate(['/shops/addshop/', shop]);
  }

  delete(shop: Shop) {
    console.log('delete shop');
    this._shopadminService.deleteShop(shop.sid).subscribe(data => {
      this.shops=this.shops.filter(u => u!==shop);
    });
    }

}
