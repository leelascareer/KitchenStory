import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooditemsComponent } from './fooditems/fooditems.component';
import { ItemComponent } from './fooditems/categories/itemslist/item/item.component';
import { ItemslistComponent } from './fooditems/categories/itemslist/itemslist.component';
import { AccountdetailsComponent } from './myaccount/accountdetails/accountdetails.component';
import { ChangepasswordComponent } from './myaccount/changepassword/changepassword.component';
import { LogoutComponent } from './myaccount/logout/logout.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { CategoriesComponent } from './fooditems/categories/categories.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path:'', redirectTo:'/fooditems', pathMatch:'full'},
  {path:'shoppingcart', component:ShoppingcartComponent},
  {path:'fooditems', component:FooditemsComponent,children:[
    {path:'',component:CategoriesComponent},
    {path:'categories',component:CategoriesComponent}
  ]},
  {path:'categories', component:FooditemsComponent},
  {path:'items', component:ItemslistComponent},
  {path:'items/:ctg', component:ItemComponent},
  {path:'item/:id', component:ItemComponent},
  {path:'myaccount', component:MyaccountComponent},
  {path:'myaccount/:details', component:AccountdetailsComponent},
  {path:'myaccount/:changepassword', component:ChangepasswordComponent},
  {path:'myaccount/:logout', component:LogoutComponent},
  {path:'payment', component:PaymentComponent},
  {path:'success',component:SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
