import { Injectable } from '@angular/core';
import {Product} from '../../../Product.model';
import {HttpClient} from '@angular/common/http';
import {environment} from './../../../../environments/environment';
import { ThrowStmt } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {

   }
 products :any [] =[
   
    {
      id:1,
      image:'assets/Image/img1.jpeg',
      title:'pibe',
      price:500,
      description:'dorado talla 16'
    },
{
      id:2,
      image:'assets/Image/img2.jpeg',
      title:'pibe',
      price:500,
      description:'dorado talla 16'
    },
{
      id:3,
      image:'assets/Image/img3.jpeg',
      title:'pibe',
      price:500,
      description:'dorado talla 16'
    } 
  ];
  
getAllProducts(){
  // return this.products;

  // return this.http.get<Product[]>('https://platzi-store.herokuapp.com/products/');

  // return this.http.get<Product[]>(environment.url_api+'/products/')
  return this.http.get<Product[]>(`${environment.url_api}/products/`)
}

productList(){
  return  this.products
}



getProduct(id:string){
  // return this.products.find(item => id == item.id);

  // return this.http.get<Product>(`https://platzi-store.herokuapp.com/products/${id}`)
  return this.http.get<Product>(`${environment.url_api}/products/${id}`)
}

createProduct(product:Product){
  return this.http.post(`${environment.url_api}/products/`,product);

}
updateProduct(id:String,changes:Partial<Product>){
  return this.http.put(`${environment.url_api}/products/${id}`,changes)

}

deleteProduct(id:string){
  return this.http.delete(`${environment.url_api}/products/${id}`)
   
}

delete(id:number){
  this.products.splice(id,5)
}
}
