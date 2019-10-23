import { Component, OnInit } from '@angular/core';
import { Addon } from '../addon';
import { FoodadminService } from '../foodadmin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addaddon',
  templateUrl: './addaddon.component.html',
  styleUrls: ['./addaddon.component.css']
})
export class AddaddonComponent implements OnInit {

  addon= new Addon;
  adid : string;
   adname:string;
 
  constructor(private _foodadminService: FoodadminService,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {


   this.addon.adid=this.activatedRoute.snapshot.paramMap.get('adid');

    this.addon.adname=this.activatedRoute.snapshot.paramMap.get('adname');
    this.addon.adOnType=this.activatedRoute.snapshot.paramMap.get('adOnType');

    const cost=this.activatedRoute.snapshot.paramMap.get('cost');
    this.addon.cost=+cost;

    const quantity=this.activatedRoute.snapshot.paramMap.get('quantity');
    this.addon.quantity=+quantity;

        
  }
 
  addAddon(){

   console.log('add addon called');


    if(this.addon.adid==null){
      console.log(this.addon.adname);
  this._foodadminService. addAddOn(this.addon).subscribe(
    
    data => {
      this.router.navigate(['/listaddon']);
    },
    error => {
      alert(error);
    });
}


else{
  console.log(this.addon.adid);
  this._foodadminService.updateAddOn(this.addon).subscribe(
    data=>{
      this.router.navigate(['/listaddon']);
    },
    error=>{
      alert(error);
    }
  )
}
  
}
}