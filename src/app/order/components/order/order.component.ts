import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/Cart/cart.service';
import {Product} from './../../../Product.model';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
products$ ! :Observable<Product[]>;

  constructor(private cartservice :CartService) { 
    //TODO: LA ESCUCHA CONTINUADE LOS PRODUCTOS QUE SE ESTAN AGREGANDO
  this.products$ = this.cartservice.cart$;

  }

  ngOnInit(): void {
  }

}
