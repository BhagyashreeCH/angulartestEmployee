import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class GetOrdersService {
  constructor(private http:HttpClient) { }
  
  private url :string = "/assets/ordersList.json";
  getOrderData() : Observable<order[]>{
    return this.http.get<order[]>(this.url);
  }

}
