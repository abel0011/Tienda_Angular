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
  pro:any=this.productservice.products;
  dataSource = this.pro;
  ngOnInit(){
    // this.productList()
  }

   ELEMENT_DATA!:Product[];
   productList(){
    return this.productservice.productList()
    
  }


  deleteProduct(product :any){
    


    console.log(product)
    this.productservice.delete(product)
    console.log(product)
  //   console.log(product)
  // product =this.productservice.delete(product.id);
  // console.log(product)
   

  //   this.productservice.products.forEach((product,index) =>{

  //     // console.log(`${id.id}-`+`${index}`)
  //     // console.log(id.id)

  //   // this.productservice.products.( id,1)
  //   console.log(product[index])
  //   this.productservice.products.splice(product[index],1)
  //   console.log(product)
    
  //   })
    
  }

  displayedColumns: string[] = ['id', 'name', 'price', 'description','actions'];

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
