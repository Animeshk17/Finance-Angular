import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/Models/Card';
import { Product } from 'src/Models/Product';
import { ProductTransaction } from 'src/Models/ProductTransaction';
import { Transaction } from 'src/Models/Transaction';
import { User } from 'src/Models/User';
import { DashboardService } from '../services/dashboard.service';
import { ProductService } from '../services/product.service';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cardData: Card = {userId: 100, cardId : 900, cardType:"", accountBalance:0, expiryDate:new Date() };
  id:any;
  productPurchased: Product = {productId: 1, productName: "", productDescription: "", productPrice: 99, productImageAddress: ""};
  productId: number = 1;
  amountPaid: number = 0;
  user: User = {userId : 1000, name: "", phone: "", address: "", account_number:"", ifsc_code: "", is_verified: false};
  transactionlist: Transaction[] = [];
  t_product: ProductTransaction = {productId: 1, productName: "", transactionAmount: 0, transactionDate: new Date};
  loggedEmail : string = localStorage.getItem('loggedUserEmail')!;
  loggedId : number = 0;
  tProducts : ProductTransaction[] = [];
  index = 0;
  constructor(private _service: DashboardService, private _service1: ProductService,
    private _userService : UserDetailsService, private router : Router) { }
  
  
  ngOnInit(): void {

    this.id = 0;
    this._userService.getUserIdFromEmail(this.loggedEmail).subscribe(data =>{
      this.id = data.userId;
      this.loggedId = data.userId;
      console.log(`Inside method ${this.loggedId}`);
      this._service.getUserById(this.id).subscribe(data=>{
        console.log(data)
        this.user = data;
      })
      this._service.getCardDetailsbyUser(this.id).subscribe(data=>{
        this.cardData = data
      });

      this._service.getProductPurchasedByUser(this.id).subscribe(data=>{
        console.log(data);
        this.productPurchased = data;
        console.log(`Id of Product : ${this.productPurchased.productId}`);
        this._service.getAmountPaidForProduct(this.id, this.productPurchased.productId).subscribe(data =>{
          console.log("getamountpaidfor product: "+this.productPurchased.productId);
          this.amountPaid = data;
        });

        this._service.getRecentTransactions(this.id).subscribe(data=>{
          console.log("Id" + this.id);
          //this.transactionlist = data;
          this.tProducts = data;
          
          console.log(this.tProducts);
          
          // for(let transaction of this.transactionlist ){
          //   this._service1.getProductbyId(transaction.productId).subscribe(data => {
          //     this.t_product.productId = data.productId;
          //     this.t_product.productName = data.productName;
          //     this.t_product.transactionAmount = transaction.transactionAmount;
          //     this.t_product.transactionDate = transaction.transactionDate;
          //     console.log(`using this.tproduct ${this.t_product.productName}`);
          //     console.log(`using this.tproduct ${this.t_product.transactionAmount}`);
              
          //     for(let tp of this.tProducts){
          //       console.log(`looping ${tp.productName}`);
          //     }
          //   })
          // }

          

          //console.log(this.transactionlist);
        });

      });
    });
  }

  logUserOut(){
    alert("You will be logged out.");
    localStorage.clear();
    this.router.navigateByUrl('/home');
  }
}
