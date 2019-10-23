import { Component, OnInit } from '@angular/core';
import { Location } from '../location';
import { ShopadminService } from '../shopadmin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.css']
})
export class AddlocationComponent implements OnInit {
  location = new Location;
  constructor(private _shopadminService: ShopadminService, private _router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const lid = this.activatedRoute.snapshot.paramMap.get('lid');
    this.location.lid = lid;
    this.location.lname = this.activatedRoute.snapshot.paramMap.get('lname');
  }

  addLocation() {
    console.log('location called');
    if (this.location.lid == null) 
    {
      this._shopadminService.addLocation(this.location).subscribe(
        data => {
          this._router.navigate(['/locations/listlocation']);
        },

        error => {
          alert(error);
        });
    }
    else {
      this._shopadminService.updateLocation(this.location).subscribe(
        data => {
          this._router.navigate(['/locations/listlocation']);
        },

        error => {
          alert(error);
        });
    }
  }

}
