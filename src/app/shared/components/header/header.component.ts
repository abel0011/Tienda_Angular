import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../core/services/Cart/cart.service';

import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //TODO:METODOS ANTERIORES
// total=0;
total$!:Observable<number>;

  constructor(private cartservice:CartService,
    
    ) { 
    this.total$= this.cartservice.cart$
    .pipe(
      map(product =>product.length)
    )

    // TODO:SEGUNDO METODO
    // this.cartservice
    // .cart$
    // .pipe(
    //   //TODO:TRANSFORMANDO UNA LISTA DE PRODUCTOS AL TAMAÑO DE LA LISTA
    //   map(products => products.length)
    // )
    // .subscribe(total=> {
    //   this.total = total
    // });

    //TODO:primer metodo
    // .subscribe(product=>{
      // 
    //   console.log(product)
    //   this.total= product.length;
    // })
  }

  ngOnInit(): void {
  }

}
