import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/Models/Card';
import { Order } from 'src/Models/Order';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string="https://localhost:50124/api/product/";
  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get<any>(this.url);
  }
  getProductbyId(id:number):Observable<any>{
    return this.http.get<any>(this.url+"all/"+id);
  }

  buyFromCard(e: Card) : Observable<any> {
    return this.http.put<any>(this.url + "card/" + e.userId, e, {observe: 'response'});
  }

  createOrder(e : any):Observable<any> {
    return this.http.post<any>("http://localhost:50124/api/order/", e);
  }
  
  
}
