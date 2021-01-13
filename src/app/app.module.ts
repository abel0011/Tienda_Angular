import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import { LayoutComponent } from './layout/layout.component';
import {SharedModule} from  './shared/shared.module';
import {CoreModule} from './core/core.module';
import {ProductModule} from './product/product.module';
import {PageNotFoundModule} from './page-not-found/page-not-found.module';
import {ContactModule} from './contact/contact.module';
import {DemoModule} from './demo/demo.module';
// TODO: SERVICIO HTTP 
import {HttpClientModule} from '@angular/common/http';

import {AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
// import {AngularFireStorage} from '@angular/fire/storage';
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
    SharedModule,
    CoreModule,
    ProductModule,
    PageNotFoundModule,
    ContactModule,
    DemoModule,

    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule
    // AngularFireStorage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
