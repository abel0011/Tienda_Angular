import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';
import { ActionSequence } from 'protractor';
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
        // canActivate: [AdminGuard],

        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)

      },
      {
        path: 'Contact',
        //TODO:VA VALIDAR DATOS 
        // canActivate:[AdminGuard],
        loadChildren:() => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'Demo',
        loadChildren: ()=> import ('./demo/demo.module').then(m=> m.DemoModule)
      },
      {
        path:'Order',
        loadChildren:()=> import ('./order/order.module').then(m =>m.OrderModule)
      }


    ],

  },
  {
    path:'Admin',
    canActivate:[AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'Auth',
    loadChildren:()=> import('./auth/auth.module').then(m =>m.AuthModule)
  },  
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }

];

@NgModule({
  //TODO: DINAMICAMENTE ESCOGA UNA ESTRATEGIA DE PRECARGA
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
