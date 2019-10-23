import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodadminService } from '../foodadmin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listfood',
  templateUrl: './listfood.component.html',
  styleUrls: ['./listfood.component.css']
})
export class ListfoodComponent implements OnInit {

  food: Food[];
  constructor(private _foodadminService:FoodadminService,private _router:Router) { }

  ngOnInit() {
    this._foodadminService.getFood().subscribe( food =>{
      this.food=food;
    });
  }
     
    delete(food:Food):void{
      
      this._foodadminService.deleteFood(food.fid).subscribe(data=>{
        this.food=this.food.filter(u => u !==food);

      });
    
    }
   edit(food : Food): void {
      console.log('edit called');
      this._router.navigate(['/addfood/',food]);
    }
  }


