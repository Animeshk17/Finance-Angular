import { Component, OnInit } from '@angular/core';
import { Product } from 'src/Models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productlist: Product[] = [];
  constructor(private _service: ProductService) { }

  ngOnInit(): void {
    this._service.getProducts().subscribe(data=>{
      this.productlist = data
    });
  }
}
