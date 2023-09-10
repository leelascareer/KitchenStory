import { Component, OnInit } from '@angular/core';
import { Items } from '../fooditems/categories/itemslist/items.model';
import { ItemslistComponent } from '../fooditems/categories/itemslist/itemslist.component';
import { Observable } from 'rxjs';
import { ItemsService } from '../fooditems/categories/itemslist/items.service';
import { Item } from '../fooditems/categories/itemslist/item/item.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../orderconfirmation/order.service';
import { OrderconfirmationComponent } from '../orderconfirmation/orderconfirmation.component';


@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  
  shoppingCart: Item[]=[];
  shoppingCartMap:Map<number,number>=ItemsService.shoppingCartMap;
  totalPrice:number=0;
  orderService:OrderService;

  //map of item id and price
  public orderPrices:Map<number,number>;

  constructor(itemsService: ItemsService, orderService: OrderService,
    private route:ActivatedRoute,
    private router:Router){
    this.shoppingCart = ItemsService.cartItems;
    //this.totalPrice = orderService.fetchOrderPrice();

    this.orderPrices=OrderService.itemPriceMap;

        this.orderPrices.forEach(value =>{
          this.totalPrice = this.totalPrice+value;
        });
  }

  ngOnInit(): void {
    
  }

  reduceQty(id:number, price:number){
    let currentCount = ItemsService.shoppingCartMap.get(id);
    currentCount=currentCount-1;
    if (currentCount===0){
      ItemsService.shoppingCartMap.delete(id);
      let itemIndex = ItemsService.cartItems.findIndex((item)=>item.id===id);
      ItemsService.cartItems.splice(itemIndex,1);
      console.log("before",OrderService.itemPriceMap);
      let deleted:boolean = OrderService.itemPriceMap.delete(id);
      console.log("After",OrderService.itemPriceMap);
      //page reload
      //window.location.reload();
    } else {
      ItemsService.shoppingCartMap.set(id,currentCount);
    }
    //component reload
    this.totalPrice=this.totalPrice-price;
    this.router.navigate([this.router.url]);
  }

  increaseQty(id:number, price:number){
    let currentCount = ItemsService.shoppingCartMap.get(id);
    currentCount=currentCount+1;
    if(currentCount<=10){
      ItemsService.shoppingCartMap.set(id,currentCount);
    } if (currentCount>10){
      window.alert("Max quantity is 10");
    }
    this.totalPrice=this.totalPrice+price;
    this.router.navigate([this.router.url]);
  }

  goToPayment(){
    this.router.navigate(['/payment']);
}
}
