import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DemoComponent} from './components/demo/demo.component';
import { DemoRoutingModule } from './demo-routing.module';
// utiliza para ng module
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule
    
  ]
})
export class DemoModule { }
