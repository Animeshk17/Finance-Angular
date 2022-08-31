import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LoginData } from 'src/Models/LoginData';
import { Card } from 'src/Models/Card';
import { User } from 'src/Models/User';

@Injectable({
  providedIn: 'root'
})

export class UserDetailsService {

  constructor(private http:HttpClient) { }

  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  url:string = "http://localhost:50124/api/";

  getUserDetails():Observable<any> {
    return this.http.get<any>("http://localhost:50124/api/User");
  }

  getUserAndLoginDetails():Observable<any> {
    return this.http.get<any>(this.url + "UserLoginViewModel");
  }

  addUser(e : any):Observable<any> {
    return this.http.post<any>("http://localhost:50124/api/userloginviewmodel/",e);
  }

  LogUserIn(e : LoginData):Observable<any> {
    return this.http.post<any>(
      "http://localhost:50124/api/logindetails/" + e.userEmail, e, {observe:'response'});
  }

  changeUserPassword(e : LoginData) :Observable<any> {
    return this.http.put<any>(
      "http://localhost:50124/api/logindetails/" + e.userEmail, e, {observe:'response'});
  }

  getUserIdFromEmail(e : string):Observable<any> {
    //var e = localStorage.getItem('loggedUserEmail');
    let param = new HttpParams().set("userEmail", e);
    return this.http.get<LoginData>("http://localhost:50124/api/logindetails/" + e, {params:param});
  }

  buyFromCard(e: Card) : Observable<any> {
    return this.http.put<any>(this.url + "card/" + e.userId, e, {observe: 'response'});
  }

  getOrders(){
    return this.http.get<any>(this.url + "order/");
  }

  verifyUserById(e : User){
    return this.http.put<any>(this.url + "user/" + e.userId, e);
  }
}
