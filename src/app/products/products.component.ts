import { Component, OnInit } from '@angular/core';
import {Product}from '../Product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    products :Product [] =[
   
    {
      id:'1',
      image:'assets/Image/img1.jpeg',
      title:'pibe',
      price:500,
      description:'dorado talla 16'
    },
{
      id:'2',
      image:'assets/Image/img2.jpeg',
      title:'pibe',
      price:500,
      description:'dorado talla 16'
    },
{
      id:'3',
      image:'assets/Image/img3.jpeg',
      title:'pibe',
      price:500,
      description:'dorado talla 16'
    } 
  ];

clickProduct(id :any){

  }


}
