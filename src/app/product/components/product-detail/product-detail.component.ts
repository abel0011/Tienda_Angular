import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
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
      // console.log(params);
      const id = params.id;
      // console.log(params.id);

      this.product = this.productservice.getProduct(id);
      // console.log(product);
    })




  }

}
