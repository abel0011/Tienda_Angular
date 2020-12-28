import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import {AdminGuard} from './admin.guard';
const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    // redirectTo: '/Home',
    //TODO:CUANDO LA URL ESTE VACIA O EN SECO
    // pathMatch: 'full',
    children: [
      {
        path: '',
        redirectTo: '/Home',
        pathMatch: 'full'
      },
      {
        path: 'Home',
        //TODO:CREAR UN MODULO DINAMICAMENTE
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)//devuelva el home module
        // component: HomeComponent
      },
      {
        path: 'Products',
        // component: ProductsComponent
        loadChildren: () => import ('./product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'Products/:id',
        // canActivate:[AdminGuard],
        // component: ProductDetailComponent
        loadChildren: () => import ('./product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'Contact',
        //TODO:VA VALIDAR DATOS 
        // canActivate:[AdminGuard],
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
  //TODO: DINAMICAMENTE ESCOGA UNA ESTRATEGIA DE PRECARGA
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
