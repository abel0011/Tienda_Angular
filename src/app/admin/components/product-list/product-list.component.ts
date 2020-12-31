import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../core/services/products/products.service';
import {Product} from '../../../Product.model';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private productservice:ProductsService){}
  ngOnInit(){
    this.Listar()
  }
   ELEMENT_DATA!:Product[];
   Listar(){
    return this.productservice.productList()
  }
  
  displayedColumns: string[] = ['id', 'name', 'price', 'description','actions'];
  // products :Listar();
  // pro:any=[
  // {
  //   id:'nuevo',
  //   title:'price',
  //   price:1234
  // }  
  // ]
  // displayedColumns: string[] = ['id', 'title', 'price'];
  //  dataSource = this.pro;
  // constructor(private productservice:ProductsService) { }

//   ngOnInit(): void {
//     this.fetchProducts();
//     this.dataSource
//     console.log(this.dataSource)
//   }

//   fetchProducts(){
//     // this.productservice.getAllProducts()
//     // .subscribe(products => {
//     //   this.products=products;
//     // })

//  this.pro=  this.productservice.productList()

    
//     console.log(this.productservice.productList())
//   } 
 
//   deleteProduct(id:string){
//     return this.productservice.deleteProduct(id)
//     .subscribe(rta =>{
//      console.log(rta) ;
//      this.fetchProducts();
//     })
//   }
}
