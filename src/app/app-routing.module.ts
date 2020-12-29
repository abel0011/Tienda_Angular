import {  NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy } from '@angular/router';
// import { ContactComponent } from './contact/components/contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
// import {AdminModule} from './admin/admin.module';
// import {DemoModule} from './demo/demo.module';
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
      // {
      //   path: 'Products/:id',
      //   // canActivate:[AdminGuard],
      //   // component: ProductDetailComponent
      //   loadChildren: () => import ('./product/product.module')
      // },
      {
        path: 'Contact',
        //TODO:VA VALIDAR DATOS 
        // canActivate:[AdminGuard],
        // component: ContactComponent

      },
      {
        path: 'Demo',
        // component: DemoComponent
        // loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)//devuelva el home module
      },
      
      {
        path:'Admin',

        // loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)//devuelva el home module
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
