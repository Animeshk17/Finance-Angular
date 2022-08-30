import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/Models/Product';
import { ProductService } from '../services/product.service';

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

  constructor(private _service: ProductService, private route: Router, private activatroute: ActivatedRoute) {
   }

  ngOnInit(): void {
    let id = this.activatroute.snapshot.params["id"];
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

}
