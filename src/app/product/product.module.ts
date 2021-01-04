import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';

import {ProductComponent} from './components/product/product.component';
import {ProductsComponent} from './components/products/products.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {SharedModule} from  '../shared/shared.module';
import {MaterialModule} from '../material/material.module';
import { MesageComponent } from './components/mesage/mesage.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    ProductDetailComponent,
    MesageComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    MaterialModule
  ],
})
export class ProductModule { }
