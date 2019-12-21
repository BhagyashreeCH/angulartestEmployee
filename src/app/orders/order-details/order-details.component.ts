import { Component, OnInit } from '@angular/core';
import { GetOrdersService } from 'src/app/services/get-orders.service';
import { order } from 'src/app/model/order';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private getOrdersService:GetOrdersService) { }
  orders:order[];
  ord : Observable<order[]>;

  ngOnInit() {
    this.ord = this.getOrdersService.getOrderData();

  }

}
