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
    // this.products = this.productservice.getAllProducts();
   this.fecthProducts(); 
  }
 
clickProduct(id :any){

  }

  fecthProducts(){
    this.productservice.getAllProducts()
    //TODO:SUBSCRIBIRNOS PORQUE ES UN OBSERVABLE PARA OBTENER LAS RESPUESTAS
    .subscribe(products =>{
      this.products=products;
    })
  }
  

}
