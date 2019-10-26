import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Shop } from '../shop';
import { Location } from '../location';
import { THIS_EXPR, ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-addshop',
  templateUrl: './addshop.component.html'
})
export class AddshopComponent implements OnInit {
  locations: Location[];
  shop = new Shop;
  lid: string;
  lname: string;

  constructor(private _customerservice: CustomerService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.shop.sid = this._activatedRoute.snapshot.paramMap.get('sid');
    if (this.shop.sid !== null) {
      this._customerservice.getShopById(this.shop.sid).subscribe(shop => {
        this.shop = shop;
        this.lid = this.shop.location.lid;
        console.log(this.lid);
      });
    }

    this._customerservice.getLocations().subscribe(locations => {
      this.locations = locations;
    }, error => {
      alert(error);
    });
  }
  addShop() {

    this.shop = {
      'sid': this.shop.sid,
      'sname': this.shop.sname,
      'location': {
        'lid': this.lid,
        'lname': this.lname
      }

    };

    if (this.shop.sid == null) {
      this._customerservice.addShop(this.shop).subscribe(
        data => {
          this._router.navigate(['shopAdmin/shopList']);
        }, error => {
          alert(error);
        });
    }
    else {
      this._customerservice.updateShop(this.shop).subscribe(
        data => {
          this._router.navigate(['shopAdmin/shopList']);
        },
        error => {
          alert(error);
        });
    }
  }
}
