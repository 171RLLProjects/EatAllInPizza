import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { OrderComponent } from './order/order.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from './admin.service';

const appRoute: Routes=
[

  {path: 'home', component: AppComponent},
  {path: 'admins', component: AdminlistComponent},
  {path: 'addAdmin', component: AddadminComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    OrderComponent,
    AddadminComponent,
    AdminlistComponent,
    OrderlistComponent
  ],
  imports: [
    BrowserModule,RouterModule,RouterModule.forRoot(appRoute),HttpClientModule,FormsModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
