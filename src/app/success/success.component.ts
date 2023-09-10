import { OrderService } from './../orderconfirmation/order.service';
import { ItemsService } from './../fooditems/categories/itemslist/items.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../fooditems/categories/itemslist/item/item.model';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  public orderCart: Item[]=[];
  //map of item id and qty
  public orderCartMap:Map<number,number>;
  //map of item id and price
  public orderPrices:Map<number,number>;
  public totalPrice=0;
  

  constructor(itemsService: ItemsService, orderService: OrderService,
    private route:ActivatedRoute,
    private router:Router){
        this.orderCart= ItemsService.cartItems;
        this.orderCartMap = ItemsService.shoppingCartMap;
        this.orderPrices=OrderService.itemPriceMap;

        this.orderPrices.forEach(value =>{
          this.totalPrice = this.totalPrice+value;
        });
        
  }

  
}
