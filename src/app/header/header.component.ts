import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ItemsService } from '../fooditems/categories/itemslist/items.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  details:String;

  constructor(private router:Router, private route:ActivatedRoute,) {
  
  }

  
  goTocart(){
    this.router.navigate(['/shoppingcart']);
}
  getCartSize():number{
    return ItemsService.cartItems.length;
  }

  ngOnInit(){
    this.route.params.subscribe(
      (params:Params)=>{
        this.details=params['details'];
      }
    );

  
}
}
