import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Food } from '../food';
import { Addon } from '../addon';

@Component({
  selector: 'app-customer-menu-food',
  templateUrl: './customer-menu-food.component.html',
  styleUrls: ['./customer-menu-food.component.css']
})
export class CustomerMenuFoodComponent implements OnInit {
  food: Food[];
  addon: Addon[];
  shopName: string;
  showAddons = false;
  foodTotal: number = 0;
  addonTotal: number = 0;
  orderTotal: number;
  cuid: string;
  constructor(private _customerservice: CustomerService, private router: Router) { }

  ngOnInit() {
    this.shopName = sessionStorage.getItem('shopName');
    this.cuid=sessionStorage.getItem('cuid');
    sessionStorage.setItem('cuid',this.cuid);
    sessionStorage.setItem('shopName',this.shopName);

    this._customerservice.getFood().subscribe(
      food => {
        this.food = food;
      });
    this._customerservice.getAddOn().subscribe(
      addon => {
        this.addon = addon;
      });
  }

  setTrue() {
    this.showAddons = true;
  }
  setFalse() {
    this.showAddons = false;
  }

  plus(food: Food) {
    console.log('plus');
    food.quantity++;
    this.setTrue();
  }

  minus(food: Food) {
    console.log('minus');
    food.quantity--;
  }

  toggleEditable(event, addon: Addon) {
    if (event.target.checked) {
      addon.quantity++;
    }
  }

  payment() {
    console.log('payment called');
    for (let f of this.food) {
      if (f.quantity > 0) {
        this.foodTotal = this.foodTotal + f.quantity * f.cost;
      }
      for (let a of this.addon) {
        if (a.quantity > 0) {
          this.addonTotal = this.addonTotal + f.quantity * a.cost;
        }
      }
    }

    
    
    this.orderTotal = this.addonTotal + this.foodTotal;
    sessionStorage.setItem('orderTotal',this.orderTotal.toString());
    this.router.navigate(['order']);
  }

  nav(){
    this.router.navigate(['customerMenu']);
  }

}
