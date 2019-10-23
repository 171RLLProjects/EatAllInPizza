import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodadminService } from '../foodadmin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit {

  food= new Food;
  
 
  constructor(private _foodadminService: FoodadminService,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {


   this.food.fid=this.activatedRoute.snapshot.paramMap.get('fid');

    this.food.fname=this.activatedRoute.snapshot.paramMap.get('fname');

    const cost=this.activatedRoute.snapshot.paramMap.get('cost');
    this.food.cost=+cost;

    const quantity=this.activatedRoute.snapshot.paramMap.get('quantity');
    this.food.quantity=+quantity;

        
  }
 
  addFood(){

   console.log('add food called');


    if(this.food.fid==null){
      console.log()
    
  this._foodadminService. addFood(this.food).subscribe(
    
    data => {
      this.router.navigate(['/listfood']);
    },
    error => {
      alert(error);
    });
}


else{
  console.log(this.food.fid);
  this._foodadminService.updateFood(this.food).subscribe(
    data=>{
      this.router.navigate(['/listfood']);
    },
    error=>{
      alert(error);
    }
  )
}
  
}
}