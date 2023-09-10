import { Injectable } from '@angular/core';
import { ItemsService } from '../fooditems/categories/itemslist/items.service';
import { Item } from '../fooditems/categories/itemslist/item/item.model';
import { Order } from './order.model';

@Injectable({
    providedIn: 'root'
  })

export class OrderService{
  public price:number[]=[];
  public orders:Order[]=[];
  shoppingCartMap:Map<number,number>=ItemsService.shoppingCartMap;
  static totalPrice:number=0;
  static itemPriceMap = new Map<number, number>;

    
  public updateOrderPrice(){
    for (var cartItem of ItemsService.cartItems){
      let qty = ItemsService.shoppingCartMap.get(cartItem.id);
      let totItemPrice = qty*cartItem.price;
      OrderService.itemPriceMap.set(cartItem.id,totItemPrice);
    }
  }

  getOrderPrice():number[]{
    for (var cartItem of ItemsService.cartItems){
      this.price.push((ItemsService.shoppingCartMap.get(cartItem.id)*cartItem.price));
    }
    return this.price;
  }

  public fetchOrderPrice():number{
    let totItemPrice:number[] = this.getOrderPrice();
    for (var price of totItemPrice){
      OrderService.totalPrice=OrderService.totalPrice+price;
    }
    return OrderService.totalPrice;
  }

  public calculateOrderPrice():number{
    let cartLength = this.shoppingCartMap.size;
    for (var i=0;i<cartLength;i++){

    }
    return 0
  }
  
}
