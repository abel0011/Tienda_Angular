import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from './../../../core/services/products/products.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  image$!: Observable<any>;
  form !: FormGroup;
  constructor(
    private frombuilder: FormBuilder
    , private productservice: ProductsService
    // para hacer la redireccion a nuestro contorlador
    , private router: Router,
    private storage: AngularFireStorage

  ) {
    this.buildForm()
  }

  ngOnInit(): void {
  }

  uploadFile(event: any) {
    //NOS DARIA EL ELEMTO EN EL ARRAY Y OBTENGO EL DE LA POSISION nuro1
    const file = event.target.files[0];
    const name = 'images';
    // que referencia tiene ese archivo
    const fileRef = this.storage.ref(name);
    // crear una tarea de subir el archivo
    const task = this.storage.upload(name, file) // suba el archivo en la carpeta y le mandamos el archivo

    task.snapshotChanges()// que tanto esta progresando la subida de la imagen
      .pipe(
        finalize(() => {
          this.image$ = fileRef.getDownloadURL()
          this.image$.subscribe(url => {
            console.log(url)
            this.form.get('image')?.setValue(url)
          })
        })
      )
      .subscribe();
    // console.log(file)
  }

  private buildForm() {
    this.form = this.frombuilder.group({
      //TODO:primir item estado inicial , segun valores requeridos
      id: ['', [Validators.required]],
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
      this.productservice.createProduct(product)
        .subscribe(newproduct => {
          console.log(newproduct);
          // A DONDE QUIERES NAVEGAR
          this.router.navigate(['./Admin/Products']);
          console.log(this.productservice.getAllProducts)
        })

    }
  }
}
