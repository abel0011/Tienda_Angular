import { Injectable } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../../../Product.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {

private products :Product[]=[];
//CREANDO UN ARRY VACIO con behaivorsubject
private cart = new BehaviorSubject<Product[]>([]);

//CREANDO UN OBSERVABLE PARA QUE CUALQUIERA SE SUBSCRIBA A EL Y NOTE SUS CAMBIOS
cart$= this.cart.asObservable();
  constructor() { }

  addCart(product:Product){
//TODO:PARCTICA DE NO MUTACION
//TODO:PARA EVITAR PROBLEMAS DE INMUTAVILIDAA
// TODO:NO TENEMOS PROBLEMAS EN HACER REFERENCIA AL MISMO ARRAY
        this.products=[...this.products, product];
        //TODO:MANDAR A TODOS LOS COMPOENENTES QUE ESTEN SUBSCRITO UN CAMBIO
        //ENVIANDO LOS DATOS A LA COPIA DEL NUEVO ARRAY
        this.cart.next(this.products);
  }
}
