import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';

import { ProductListComponent } from './components/product-list/product-list.component';
import {FormProductComponent} from './components/form-product/form-product.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
@NgModule({
  declarations: [ProductFormComponent, NavComponent, ProductListComponent,  FormProductComponent, ProductEditComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AdminModule { }
