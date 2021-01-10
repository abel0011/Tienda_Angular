import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../core/services/Cart/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

total=0;

  constructor(private cartservice:CartService) { 
    this.cartservice
    .cart$
    .subscribe(product=>{
      
      console.log(product)
      this.total= product.length;
    })
  }

  ngOnInit(): void {
  }

}
