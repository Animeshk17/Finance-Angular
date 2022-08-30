import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/Models/Card';
import { LoginData } from 'src/Models/LoginData';
import { Order } from 'src/Models/Order';
import { Product } from 'src/Models/Product';
import { ProductService } from '../services/product.service';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {

  product: Product = {
    productId: 100, productName : "", productDescription: "", productPrice: 120, productImageAddress: ""
  };
  
  images: string[] = [];
  selectedEmiType: string = "";
  startingEmiPrice: number = 0;
  numberOfMonths: number = 0;
  loggedEmail : string = localStorage.getItem('loggedUserEmail')!;
  loggedUserId : number = 77;
  cardObject : Card = {cardId:500, userId:500, cardType:"", accountBalance:9999, expiryDate: new Date()}
  //ld : LoginData = {loginId: 300, userId: 300, userEmail: "", password: "", confirmPassword: ""};
  orderNumber : number = 6;
  orderObject : Order = { orderId: this.orderNumber, productId: 100, userId: 300, orderDate: new Date(), orderAmount: 99}

  constructor(private _service: ProductService, private _userService: UserDetailsService, private route: Router, private activateroute: ActivatedRoute) {
  }

  ngOnInit(): void {
    
    let id = this.activateroute.snapshot.params["id"];
    this._service.getProductbyId(id).subscribe(data=>
      {
        this.product = data;
        this.images.push(this.product.productImageAddress);
        this.images.push(this.product.productImageAddress);

      });
  }
  onChange(emiType: string) {
    console.log(emiType);
    this.numberOfMonths = Number(emiType.slice(0,2));
    this.startingEmiPrice = Math.round((this.product.productPrice/this.numberOfMonths) * 100)/100;
  }

  onClick() {
    
    this.cardObject.accountBalance = this.startingEmiPrice;
    this._userService.getUserIdFromEmail(this.loggedEmail).subscribe(data =>{
      
      this.loggedUserId = data.userId;

      this.cardObject.userId = data.userId;
  
      this.orderObject.orderAmount = this.startingEmiPrice;
      this.orderObject.userId = data.userId;
      this.orderObject.productId = 1;
      console.log(this.orderObject.userId);
      alert("button clicked");
      
      this._userService.buyFromCard(this.cardObject).subscribe(data =>{
        console.log(data);
      });

      console.log(this.orderObject);
      this._service.createOrder(this.orderObject).subscribe(data => {
        console.log(data);
        this.orderNumber = this.orderNumber+1;
      });
    });

    
  }

}
