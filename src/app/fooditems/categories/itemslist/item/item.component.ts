import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ItemsService } from '../items.service';
import { Items } from '../items.model';
import { Item } from './item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy {
  item!:Item;
  items!:Items[];
  paramsSubscription:Subscription;
  ctg:string;
  id:number;

  constructor(private itemsService: ItemsService,
    private route:ActivatedRoute,
    private router:Router) {
  
  }
    ngOnInit(){
      //const ctg =this.route.snapshot.params['ctg'];
      //this.items=this.itemsService.getItemsByCategory(ctg);
      /*this.route.params.subscribe(
      (params:Params)=>{
        let id_Str = params['id'];
        this.id=+id_Str;
        this.item=this.itemsService.getItemById(this.id);
        console.log(this.item);
      });*/
      this.route.params.subscribe(
        (params:Params)=>{
          this.ctg=params['ctg'];
          this.items=this.itemsService.getItemsByCategory(this.ctg);
          console.log(this.items);
        }
      );
  
    }

    addToCart(itemId:number){
      this.itemsService.pushToCart(itemId);
    }
    
    

    ngOnDestroy(): void {
      this.paramsSubscription.unsubscribe();
    }

  }
