import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductsService} from './../../../core/services/products/products.service';
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  form ! :FormGroup;
  constructor(
    private frombuilder:FormBuilder
    ,private productservice :ProductsService
    // para hacer la redireccion a nuestro contorlador
    ,private router:Router
  ) { 
    this.buildForm()
  }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.frombuilder.group({
      //TODO:primir item estado inicial , segun valores requeridos
      id:['', [Validators.required]],
      title:['', [Validators.required]],
      price : ['', [Validators.required]],
      image:[''],
      description:['', [Validators.required]],
    })
  }

  saveProduct(event:Event){
    //TODO:evite recargar la pagina
    event.preventDefault();
    // el formulario por defecto en html va querer recargar la pagina
    console.log(this.form.value)
    if(this.form.valid){
      const product = this.form.value;
      this.productservice.createProduct(product)
      .subscribe(newproduct =>{
        console.log(newproduct);
        // A DONDE QUIERES NAVEGAR
        this.router.navigate(['./Admin/Products']);
        console.log(this.productservice.getAllProducts)
      })

    } 
  }
}
