import { Component, OnDestroy, OnInit     } from '@angular/core';
import { ItemsService } from '../fooditems/categories/itemslist/items.service';
import { OrderService } from './order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../fooditems/categories/itemslist/item/item.model';

@Component({
  selector: 'app-orderconfirmation',
  templateUrl: './orderconfirmation.component.html',
  styleUrls: ['./orderconfirmation.component.css']
})
export class OrderconfirmationComponent {

  
  constructor(private orderService: OrderService,
    private route:ActivatedRoute,
    private router:Router) {
  
  }

  
}
