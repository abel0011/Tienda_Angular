import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  form !: FormGroup;
  id!: string;
  constructor(
    private frombuilder: FormBuilder
    , private productservice: ProductsService
    // para hacer la redireccion a nuestro contorlador
    , private router: Router,
    private activeroute: ActivatedRoute
  ) {
    this.buildForm()
  }

  ngOnInit(): void {
    this, this.activeroute.params
      .subscribe((params: Params) => {
        this.id = params.id;
        this.productservice.getProduct(this.id)
          .subscribe(product => {
            this.form.patchValue(product)
          });
      });
    }

  private buildForm() {
    this.form = this.frombuilder.group({
      //TODO:primir item estado inicial , segun valores requeridos
      // id: ['', [Validators.required]], TODO: CUANDO SE CREA NESECITO CREAR EL ID PERO CUANDO EDITO NO!°!
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: [''],
      description: ['', [Validators.required]],
    })
  }


  saveProduct(event: Event) {
    //TODO:evite recargar la pagina
    event.preventDefault();
    // el formulario por defecto en html va querer recargar la pagina
    console.log(this.form.value)
    if (this.form.valid) {
      const product = this.form.value;
      this.productservice.updateProduct(this.id, product)
        .subscribe(newproduct => {
          console.log(newproduct);
          // A DONDE QUIERES NAVEGAR
          this.router.navigate(['./Admin/Products']);
          console.log(this.productservice.getAllProducts)
        })

    }

    // saveProduct(event:Event){
    //   //TODO:evite recargar la pagina
    //   event.preventDefault();
    //   // el formulario por defecto en html va querer recargar la pagina
    //   console.log(this.form.value)
    //   if(this.form.valid){
    //     const product = this.form.value;
    //     this.productservice.createProduct(product)
    //     .subscribe(newproduct =>{
    //       console.log(newproduct);
    //       // A DONDE QUIERES NAVEGAR
    //       this.router.navigate(['./Admin/Products']);
    //       console.log(this.productservice.getAllProducts)
    //     })

    //   } 
    // }


  }


}