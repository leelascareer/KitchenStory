import { Category } from './../category.model';
import { Injectable } from '@angular/core';
import { Items } from '././items.model';
import { Item } from './item/item.model';
import { findIndex } from 'rxjs';
import { OrderService } from 'src/app/orderconfirmation/order.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService{

    items:Item[]=[
        new Item("Dairy","Amul Milk- 1l", 40, "/assets/images/Amul.jpeg",101),
        new Item("Dairy","Nandini Milk- 1/2l", 22, "/assets/images/shubham_1.jpg",102),
        new Item("Dairy","Milky Mist Cheese Cubes- 120g", 198, "/assets/images/MilkyMistCheeseCubes.png",103),
        new Item("Dairy","Id Panneer - 200g", 180, "/assets/images/Id_Panneer.png",104),
        new Item("Dairy","GRB Gheee - 200ml", 250, "/assets/images/GRB_Ghee.jpg",105),
        new Item("Breads","Pizza Base - 7inch, pack of 4", 40, "/assets/images/PizzaBase.jpg",106),
        new Item("Breads","Modern Milk Bread - 450g", 50, "/assets/images/ModernMilkBread.jpeg",107),
        new Item("Breads","ID Ready To Eat Chapathis- each packet contains 8 chapatis", 90, "/assets/images/iD-Wheat-Chapati.png",108),
        new Item("Breads","Fatima Bakery - French Loaf, 250g", 100, "/assets/images/FrenchLoaf.png",109),
        new Item("Beverages","Real Fruits - Orange Juice 1 litre tetra pack", 250, "/assets/images/real-fruit-juice.png",110),
        new Item("Beverages","Hatti Kaapi - Cold Coffee Bottled - 250ml", 100, "/assets/images/Hatti-Kappi-Cold.jpg",111),
        new Item("Beverages","Paper Boat - Pomogranate Juice - 200ml", 20, "/assets/images/real-fruit-juice.png",112),
        new Item("HerbsAndSpices","Oregano - 100g", 99, "/assets/images/Oregano.jpeg",113),
        new Item("HerbsAndSpices","Basil -100g", 99, "/assets/images/BasilSeeds.jpg",114),
        new Item("HerbsAndSpices","Cloves - 50g", 50, "/assets/images/cloves.png",115),
        new Item("HerbsAndSpices","Cardamom - 50g", 100, "/assets/images/cardamom.jpg",116),
        new Item("HerbsAndSpices","Chilli Flakes - 100g", 99, "/assets/images/Chilliflakes.jpg",117),
      ];

      static cartItems:Item[]=[];
      
      //map of item id and qty
      static shoppingCartMap = new Map<number, number>;
      

  getAllItems(): Item[] {
    return this.items;
  }
  
  pushToCart(id:number){
    let itemPresentCheck:Items[]= ItemsService.cartItems.filter((item)=>item.id===id);
    if (itemPresentCheck.length===0){
    let addedItem:Item = this.getItemById(id);
    ItemsService.cartItems.push(addedItem);
    ItemsService.shoppingCartMap.set(addedItem.id,1);
    OrderService.itemPriceMap.set(addedItem.id,addedItem.price);
  }
  }



  fetchCartItems():Item[]{
    return ItemsService.cartItems;
  }

  getItemById(id:number): Item {
    let itemById = this.items.find((item)=>item.id===id)   
    return itemById;
  }

  getItemsByCategory(ctg:string): Item[] {
    return this.items.filter((item)=>item.category===ctg);
  }

  
}