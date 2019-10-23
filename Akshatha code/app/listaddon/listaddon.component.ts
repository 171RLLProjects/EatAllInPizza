import { Component, OnInit } from '@angular/core';
import { Addon } from '../addon';
import { FoodadminService } from '../foodadmin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listaddon',
  templateUrl: './listaddon.component.html',
  styleUrls: ['./listaddon.component.css']
})
export class ListaddonComponent implements OnInit {
  addon: Addon[];
  constructor(private _foodadminService:FoodadminService,private _router:Router) { }

  ngOnInit() {
   
    this._foodadminService.getAddOn().subscribe( addon =>{
      this.addon=addon;
    });
  }
     
    delete(addon:Addon):void{
      
      this._foodadminService.deleteFood(addon.adid).subscribe(data=>{
        this.addon=this.addon.filter(u => u !==addon);

      });
    
    }
   edit(addon : Addon): void {
      console.log('edit called');
      this._router.navigate(['/addaddon/',addon]);
    }
  }

