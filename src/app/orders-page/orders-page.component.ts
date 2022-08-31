import { Component, OnInit } from '@angular/core';
import { Order } from 'src/Models/Order';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})
export class OrdersPageComponent implements OnInit {

  orderList : Order[] = [];
  
  constructor(private _service : UserDetailsService) { }

  ngOnInit(): void {
    this._service.getOrders().subscribe(data => {
      this.orderList = data;
      console.log(data);
    })
  }

}
