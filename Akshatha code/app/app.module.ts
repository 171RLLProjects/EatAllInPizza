import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { FoodadminComponent } from './foodadmin/foodadmin.component';
import { AddfoodComponent } from './addfood/addfood.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FoodadminService } from './foodadmin.service';
import { ListfoodComponent } from './listfood/listfood.component';
import { AddaddonComponent } from './addaddon/addaddon.component';
import { ListaddonComponent } from './listaddon/listaddon.component';

const appRoute: Routes = [
  { path: 'addfood', component: AddfoodComponent },
  { path: 'listfood', component: ListfoodComponent },
  { path: 'addaddon', component: AddaddonComponent },
  { path: 'listaddon', component: ListaddonComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddaddonComponent,
    ListaddonComponent,
    FoodadminComponent,
    AddfoodComponent,
    ListfoodComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoute), FormsModule, HttpClientModule
  ],
  providers: [FoodadminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
