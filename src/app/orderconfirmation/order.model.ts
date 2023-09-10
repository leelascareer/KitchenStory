import { Item } from "../fooditems/categories/itemslist/item/item.model";

export class Order{
    public item:Item;
    public qty:number;
    public price:number;
    public imagePath:string;
    public id:number;


    constructor(item:Item, qty:number, price:number, 
                imagePath:string, id?:number){
        this.item=item;
        this.qty=qty;
        this.price=price;
        this.imagePath=imagePath;
        this.id=id;
    }

   
}