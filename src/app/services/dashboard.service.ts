import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  url:string="http://localhost:50124/api/";
  constructor(private http:HttpClient) { }

  //returns card details by user
  getCardDetailsbyUser(id:number):Observable<any>{
    let param = new HttpParams().set("id",id);
    return this.http.get<any>(this.url+"dashboard/", {params: param});
  }

  //get products purchased by user
  getProductPurchasedByUser(id: number):Observable<any>{
    let param = new HttpParams().set("id", id);
    return this.http.get<any>(this.url+"dashboard/productsPurchasedByUser/", {params:param});
  }

  //get amount paid till now for a product purchased by userid and productid
  getAmountPaidForProduct(id: number, productId: number):Observable<any>{
    console.log(productId);
    let params = new HttpParams()
    .set("userId", id)
    .set("productId", productId);
    return this.http.get<any>(this.url + "dashboard/getAmountPaidForProduct/", {params: params})
  }

  //returns recent transactions of a user who is loggen in
  getRecentTransactions(id:number):Observable<any>{
    let param = new HttpParams().set("id",id);
    return this.http.get<any>(this.url+"dashboard/getRecentTransactions/", {params:param});
  }

  //returns user details using id
  getUserById(id:number):Observable<any>{
    return this.http.get<any>(this.url + "user/"+id );
  }
}
