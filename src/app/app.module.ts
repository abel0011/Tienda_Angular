import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { SwiperModule } from 'swiper/angular';

import { LayoutComponent } from './layout/layout.component';
import {SharedModule} from  './shared/shared.module';
import {CoreModule} from './core/core.module';
import {ProductModule} from './product/product.module';
import {PageNotFoundModule} from './page-not-found/page-not-found.module';
import {ContactModule} from './contact/contact.module';
import {DemoModule} from './demo/demo.module';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    [SwiperModule],
    SharedModule,
    CoreModule,
    ProductModule,
    PageNotFoundModule,
    ContactModule,
    DemoModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
