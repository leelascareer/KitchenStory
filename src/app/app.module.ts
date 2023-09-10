import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooditemsComponent } from './fooditems/fooditems.component';
import { CategoriesComponent } from './fooditems/categories/categories.component';
import { ItemslistComponent } from './fooditems/categories/itemslist/itemslist.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { EditcartComponent } from './shoppingcart/editcart/editcart.component';
import { RouterModule, Routes } from '@angular/router';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { AccountdetailsComponent } from './myaccount/accountdetails/accountdetails.component';
import { LogoutComponent } from './myaccount/logout/logout.component';
import { ChangepasswordComponent } from './myaccount/changepassword/changepassword.component';
import { ItemComponent } from './fooditems/categories/itemslist/item/item.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderconfirmationComponent } from './orderconfirmation/orderconfirmation.component';
import { SuccessComponent } from './success/success.component';


/*const appRoutes: Routes = [
  {path:'', component:FooditemsComponent},
  {path:'shoppingcart', component:ShoppingcartComponent},
  {path:'fooditems', component:FooditemsComponent},
  {path:'categories', component:FooditemsComponent},
  {path:'items', component:ItemslistComponent},
  {path:'items/:ctg', component:ItemComponent},
  {path:'items/:id', component:ItemComponent},
  {path:'myaccount', component:MyaccountComponent},
  {path:'myaccount/:details', component:AccountdetailsComponent},
  {path:'myaccount/:changepassword', component:ChangepasswordComponent},
  {path:'myaccount/:logout', component:LogoutComponent}
];*/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooditemsComponent,
    CategoriesComponent,
    ItemslistComponent,
    ShoppingcartComponent,
    EditcartComponent,
    MyaccountComponent,
    AccountdetailsComponent,
    LogoutComponent,
    ChangepasswordComponent,
    ItemComponent,
    PaymentComponent,
    OrderconfirmationComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
