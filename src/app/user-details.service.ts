import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LoginData } from 'src/Models/LoginData';

@Injectable({
  providedIn: 'root'
})

export class UserDetailsService {

  constructor(private http:HttpClient) { }

  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  url:string = "http://localhost:50124/api/UserLoginViewModel";

  getUserDetails():Observable<any> {
    return this.http.get<any>("http://localhost:50124/api/User");
  }

  getUserAndLoginDetails():Observable<any> {
    return this.http.get<any>(this.url);
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


}
