import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../orderconfirmation/order.service';
import { Order } from '../orderconfirmation/order.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor(private route:ActivatedRoute,
    private router:Router, private orderservice: OrderService){}

    paymentProcess(){
    this.orderservice.updateOrderPrice();
    this.router.navigate(['/success']);
}

}
