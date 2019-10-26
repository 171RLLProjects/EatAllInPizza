import { Component, OnInit } from '@angular/core';
import { Addon } from '../addon';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-listaddon',
  templateUrl: './listaddon.component.html'
})
export class ListaddonComponent implements OnInit {
  addon: Addon[];
  constructor(private _customerservice: CustomerService, private _router: Router) { }

  ngOnInit() {

    this._customerservice.getAddOn().subscribe(addon => {
      this.addon = addon;
    });
  }

  delete(addon: Addon): void {
    console.log('delete called');
    this._customerservice.deleteFood(addon.adid).subscribe(data => {
      this.addon = this.addon.filter(u => u !== addon);

    });

  }
  edit(addon: Addon): void {
    console.log('edit called');
    this._router.navigate(['foodAdmin/addaddon/', addon]);
  }
}

