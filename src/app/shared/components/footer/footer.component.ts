import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  emailField:FormControl;

  constructor() { 
    //TODO: primer campo se ingresa texto a mostrar 
    //TODO: segundo campo arreglo --> valor requerido max y min
    this.emailField= new FormControl('Texo Ingresado'
    ,[ 
      Validators.required,
      Validators.email
      // Validators.minLength(5),
      // Validators.maxLength(15)
    ]);

    this.emailField.valueChanges
    .subscribe(
      value=> {
        console.log(value)
      }
    )
    
    
  }

  ngOnInit(): void {
  }

  sendMail(){
    if(this.emailField.valid){
      console.log('si es vlaido'+ this.emailField.value)
    }
  }
}
