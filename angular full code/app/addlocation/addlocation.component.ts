import { Component, OnInit } from '@angular/core';
import { Location } from '../location';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html'
})
export class AddlocationComponent implements OnInit {
  location = new Location;
  constructor(private _customerservice: CustomerService, private _router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const lid = this.activatedRoute.snapshot.paramMap.get('lid');
    this.location.lid = lid;
    this.location.lname = this.activatedRoute.snapshot.paramMap.get('lname');
  }

  addLocation() {
    console.log('location called');
    if (this.location.lid == null) 
    {
      this._customerservice.addLocation(this.location).subscribe(
        data => {
          this._router.navigate(['shopAdmin/locationList']);
        },

        error => {
          alert(error);
        });
    }
    else {
      this._customerservice.updateLocation(this.location).subscribe(
        data => {
          this._router.navigate(['shopAdmin/locationList']);
        },

        error => {
          alert(error);
        });
    }
  }

}
