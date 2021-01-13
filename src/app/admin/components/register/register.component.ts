import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {AuthService} from './../../../core/services/auth/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form!:FormGroup;
  constructor(private formbuilder :FormBuilder
    ,private router:Router 
    ,private authService :AuthService
    ) { 
      this.builForm()
    }

  ngOnInit(): void {
  }

  register(event:Event){
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      this.authService.createUser(value.email,value.password)
      .then(()=> {
        this.router.navigate(['/Auth/Loin'])
      })
    }
    console.log(this.form.value)

  }

private   builForm(){
  this.form = this.formbuilder.group({
   eamil: ['',[Validators.required]],
   password:['',[Validators.required]]

  })

  }

}
