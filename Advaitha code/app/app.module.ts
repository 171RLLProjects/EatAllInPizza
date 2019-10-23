import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { LocationComponent } from './location/location.component';
import { AddshopComponent } from './addshop/addshop.component';
import { AddlocationComponent } from './addlocation/addlocation.component';
import { ListshopComponent } from './listshop/listshop.component';
import { ListlocationComponent } from './listlocation/listlocation.component';
import { ShopadminService } from './shopadmin.service';

const appRoute: Routes = [
  { path: 'home', component: AppComponent },
  {
    path: 'shops', component: ShopComponent,
    children: [
      { path: 'addshop', component: AddshopComponent },
      { path: 'listshop', component: ListshopComponent },
    ]},
  {
    path: 'locations', component: LocationComponent,
    children: [
      { path: 'addlocation', component: AddlocationComponent },

      { path: 'listlocation', component: ListlocationComponent },
    ]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    LocationComponent,
    AddshopComponent,
    AddlocationComponent,
    ListshopComponent,
    ListlocationComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoute)
  ],
  providers: [ShopadminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
