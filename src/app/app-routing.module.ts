import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    // redirectTo: '/Home',
    //TODO:CUANDO LA URL ESTE VACIA O EN SECO
    // pathMatch: 'full',
    children: [
      {
        path:'',
        redirectTo:'/Home',
        pathMatch:'full'
      },
      {
        path: 'Home',
        component: HomeComponent
      },
      {
        path: 'Products',
        component: ProductsComponent
      },
      {
        path: 'Products/:id',
        component: ProductDetailComponent
      },
      {
        path: 'Contact',
        component: ContactComponent
      },
      {
        path: 'Demo',
        component: DemoComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
