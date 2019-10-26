import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '../location';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-listlocation',
  templateUrl: './listlocation.component.html'
})
export class ListlocationComponent implements OnInit {
  locations: Location[];

  constructor(private _customerservice: CustomerService, private router: Router) { }

  ngOnInit() {
    this._customerservice.getLocations().subscribe(locations => {
      this.locations = locations;
      console.log(locations);
    })
  }

  delete(location: Location): void {
    console.log('delete location called');
    this._customerservice.deleteLocation(location.lid).subscribe(data => {
      this.locations = this.locations.filter(u => u!== location);
    });
  }
  edit(location: Location): void {
    console.log('edit called');
    this.router.navigate(['shopAdmin/addLocation/', location]);
  }

}
