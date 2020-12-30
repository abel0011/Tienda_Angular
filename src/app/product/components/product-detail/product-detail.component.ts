import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../Product.model';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!: any;
  constructor(private route: ActivatedRoute, private productservice: ProductsService) { }

  //TODO:MANERA ADECUADA DE RICIBIR DATOS 
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productservice.getProduct(id);
    })




  }

  fetchProduct(id: string) {
    this.productservice.getProduct(id)
      .subscribe(product => {
        console.log(product)
        this.product = product;
      })

  }

  createProduct() {
    const newProduct: Product = {
      id: '22',
      title: 'nuevo producto',
      image: 'assets/Image/img1.jpg',
      price: 3000,
      description: 'bla blaaaaaaaaaaaaaaa'
    }
    this.productservice.createProduct(newProduct)
      .subscribe(product => {
        console.log(product)
        this.product = product;
      })


  }

  updateProduct() {
    const updateProduc : Partial<Product> = {
      id: '30',
      title: 'Editado producto',
      image: 'assets/Image/img1.jpeg',
      price: 5000,
      description: 'Producto esditado'
    };

    this.productservice.updateProduct('1', updateProduc)
      .subscribe(product => {
        console.log(product)
      })
  }

  deleteProduct(){
    this.productservice.deleteProduct('333')
    .subscribe(rta => {
      console.log(rta)
    })
  }
}
