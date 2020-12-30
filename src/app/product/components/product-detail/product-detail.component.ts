import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import {Product } from '../../../Product.model';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!:any;
  constructor(private route: ActivatedRoute, private productservice: ProductsService) { }

  //TODO:MANERA ADECUADA DE RICIBIR DATOS 
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productservice.getProduct(id);
    })




  }

  fetchProduct(id:string){
    this.productservice.getProduct(id)
    .subscribe(product => {
      console.log(product)
      this.product = product;
    })

  }
}
