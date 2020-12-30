import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../core/services/products/products.service';
import {Product} from '../../../Product.model';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products :any;
  displayedColumns: string[] = ['id', 'title', 'price','actions'];
  constructor(private productservice:ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productservice.getAllProducts()
    .subscribe(products => {
      this.products=products;
    })
  }

  deleteProduct(id:string){
    return this.productservice.deleteProduct(id)
    .subscribe(rta =>{
     console.log(rta) ;
     this.fetchProducts();
    })
  }
}
