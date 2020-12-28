import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsService} from './services/products/products.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  //TODO:GENERANDO PROVIDERS
  providers:[
    ProductsService
  ]
})
export class CoreModule { }
