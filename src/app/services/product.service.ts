import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  
}
