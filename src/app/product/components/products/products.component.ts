import { Component, OnInit } from '@angular/core';
import {Product}from '../../../Product.model';
import {ProductsService} from '../../../core/services/products/products.service';
@Component({    
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   products !:Product [] ;

  constructor(private productservice:ProductsService) 
  {  }

  ngOnInit(): void {
    this.products = this.productservice.getAllProducts();
  }
 
clickProduct(id :any){

  }


}
