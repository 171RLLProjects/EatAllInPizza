import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html'
})
export class AddfoodComponent implements OnInit {

  food = new Food;


  constructor(private _customerservice: CustomerService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.food.fid = this.activatedRoute.snapshot.paramMap.get('fid');
    if (this.food.fid !== null) {
      this.food.fname = this.activatedRoute.snapshot.paramMap.get('fname');

      const cost = this.activatedRoute.snapshot.paramMap.get('cost');
      this.food.cost = +cost;

      const quantity = this.activatedRoute.snapshot.paramMap.get('quantity');
      this.food.quantity = +quantity;
    }
  }
  addFood() {
    this.food = {
      "fid": this.food.fid,
      "fname": this.food.fname,
      "cost": this.food.cost,
      "quantity": this.food.quantity,
      "shop": {
        "sid": 'SH_002',
        "sname": '',
        "location": {
          "lid": '',
          "lname": ''
        }
      }
    }
    console.log('add food called');
    if (this.food.fid == null) {
      this._customerservice.addFood(this.food).subscribe(

        data => {
          this.router.navigate(['foodAdmin/foodList']);
        },
        error => {
          alert(error);
        });
    }


    else {
      console.log(this.food.fid);
      this._customerservice.updateFood(this.food).subscribe(
        data => {
          this.router.navigate(['foodAdmin/foodList']);
        },
        error => {
          alert(error);
        }
      )
    }

  }
}