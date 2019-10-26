import { Component, OnInit } from '@angular/core';
import { Addon } from '../addon';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-addaddon',
  templateUrl: './addaddon.component.html'
})
export class AddaddonComponent implements OnInit {

  addon = new Addon;
  // adid: string;
  //adname: string;

  constructor(private _customerService: CustomerService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.addon.adid = this.activatedRoute.snapshot.paramMap.get('adid');
    if (this.addon.adid !== null) {
      this.addon.adname = this.activatedRoute.snapshot.paramMap.get('adname');
      this.addon.adOnType = this.activatedRoute.snapshot.paramMap.get('adOnType');

      const cost = this.activatedRoute.snapshot.paramMap.get('cost');
      this.addon.cost = +cost;

      const quantity = this.activatedRoute.snapshot.paramMap.get('quantity');
      this.addon.quantity = +quantity;
    }
  }

  addAddon() {
    console.log('add addon called');
    if (this.addon.adid === null) {
      this._customerService.addAddOn(this.addon).subscribe(

        data => {
          this.router.navigate(['foodAdmin/addonList']);
        },
        error => {
          alert(error);
        });
    }


    else {
      this._customerService.updateAddOn(this.addon).subscribe(
        data => {
          this.router.navigate(['foodAdmin/addonList']);
        },
        error => {
          alert(error);
        }
      )
    }

  }
}