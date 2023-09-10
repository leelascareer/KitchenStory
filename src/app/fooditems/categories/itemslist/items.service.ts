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
        new Item("Dairy","Nandini Milk- 1/2l", 22, "https://manmul.coop/wp-content/uploads/2022/02/shubham_1.jpg",102),
        new Item("Dairy","Milky Mist Cheese Cubes- 120g", 198, "https://shop.milkymist.com/cdn/shop/products/3d-cream-cubes-top-front-view.png?v=1650369002",103),
        new Item("Dairy","Id Panneer - 200g", 180, "https://www.idfreshfood.com/paneer/img/pack%201.png",104),
        new Item("Dairy","GRB Gheee - 200ml", 250, "data:image/jpeg;base64,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",105),
        new Item("Breads","Pizza Base - 7inch, pack of 4", 40, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdU0ACWcUZBsT_SVfEg2G5xio43vnN3DZCtw&usqp=CAU",106),
        new Item("Breads","Modern Milk Bread - 450g", 50, "https://www.modernfoods.co.in/wp-content/uploads/2021/04/Bakers-Loaf-Milk-Bread-lisitngpage.png",107),
        new Item("Breads","ID Ready To Eat Chapathis- each packet contains 8 chapatis", 90, "https://www.modernfoods.co.in/wp-content/uploads/2021/04/Bakers-Loaf-Milk-Bread-lisitngpage.png",108),
        new Item("Breads","Fatima Bakery - French Loaf, 250g", 100, "https://panamarbakery.com/public/Image/2021/3/13954_1baguetteclsica250g37uds250g_Galeria.png",109),
        new Item("Beverages","Real Fruits - Orange Juice 1 litre tetra pack", 250, "https://img1.exportersindia.com/product_images/bc-small/2021/10/9467580/real-fruit-juice-1634381442-6039776.png",110),
        new Item("Beverages","Hatti Kaapi - Cold Coffee Bottled - 250ml", 100, "https://img.restaurantguru.com/rdd5-Hatti-Kappi-Inside-Cisco-office-beer.jpg",111),
        new Item("Beverages","Paper Boat - Pomogranate Juice - 200ml", 20, "https://www.planethealth.in/image/cache/catalog/52003-400x300.jpeg",112),
        new Item("HerbsAndSpices","Oregano - 100g", 99, "https://images.meesho.com/images/products/50550053/tmsrx_512.webp",113),
        new Item("HerbsAndSpices","Basil -100g", 99, "https://www.sharmispassions.com/wp-content/uploads/2015/02/Chilliflakes5.jpg",114),
        new Item("HerbsAndSpices","Cloves - 50g", 50, "https://4.imimg.com/data4/CO/RD/MY-5660307/clove-seeds-500x500.jpg",115),
        new Item("HerbsAndSpices","Cardamom - 50g", 100, "https://wholesaledryfruits.in/wp-content/uploads/2022/07/02_0015_IMG_2388.jpg",116),
        new Item("HerbsAndSpices","Chilli Flakes - 100g", 99, "https://www.sharmispassions.com/wp-content/uploads/2015/02/Chilliflakes5.jpg",117),
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