import { Category } from './../category.model';
import { ShoppingcartComponent } from './../../../shoppingcart/shoppingcart.component';
import { ItemsService } from './items.service';
import { Component, OnInit } from '@angular/core';
import { Items } from './items.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-itemslist',
  templateUrl: './itemslist.component.html',
  styleUrls: ['./itemslist.component.css']
})
export class ItemslistComponent implements OnInit {
  items!:Items[];
  

  constructor(private itemsService: ItemsService,
              private router:Router,) {
    this.items=itemsService.getAllItems();
  }

  ngOnInit(){ }

addToCart(itemId:number){
  this.itemsService.pushToCart(itemId);
}

goTocart(){
    this.router.navigate(['/shoppingcart']);
}

increment(){}
decrement(){}
}
