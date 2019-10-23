import { Component, OnInit } from '@angular/core';
import { ShopadminService } from '../shopadmin.service';
import { Router } from '@angular/router';
import { Location } from '../location';

@Component({
  selector: 'app-listlocation',
  templateUrl: './listlocation.component.html',
  styleUrls: ['./listlocation.component.css']
})
export class ListlocationComponent implements OnInit {
  locations: Location[];

  constructor(private _shopadminService: ShopadminService, private router: Router) { }

  ngOnInit() {
    this._shopadminService.getLocations().subscribe(locations => {
      this.locations = locations;
      console.log(locations);
    })
  }

  delete(location: Location): void {
    console.log('delete location called');
    this._shopadminService.deleteLocation(location.lid).subscribe(data => {
      this.locations = this.locations.filter(u => u!== location);
    });
  }
  edit(location: Location): void {
    console.log('edit called');
    this.router.navigate(['/locations/addlocation/', location]);
  }

}
