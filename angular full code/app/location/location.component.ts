import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html'
})
export class LocationComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
}
