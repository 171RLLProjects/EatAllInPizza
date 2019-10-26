import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-listfood',
  templateUrl: './listfood.component.html'
})
export class ListfoodComponent implements OnInit {

  food: Food[];
  constructor(private _customerservice: CustomerService, private _router: Router) { }

  ngOnInit() {
    this._customerservice.getFood().subscribe(food => {
      this.food = food;
    });
  }

  delete(food: Food): void {
    this._customerservice.deleteFood(food.fid).subscribe(data => {
      this.food = this.food.filter(u => u !== food);

    });
  }
  
  edit(food: Food): void {
    console.log('edit called');
    this._router.navigate(['foodAdmin/addFood/', food]);
  }
}


