import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form! :FormGroup;
  constructor(
    private  authservice:AuthService,
    private frombuilder:FormBuilder,
    private route :Router
  ) { }

  ngOnInit(): void {
    this.buildForm()
  }

  login(event:Event){
    event.preventDefault();
    if(this.form.valid){
      const value= this.form.value;
      this.authservice.login(value.email,value.password)
      .then(()=>{
        this.route.navigate(['/Admin']);
      })
      .catch(()=>{
        alert('No es valido');
      })
    }
  }

  buildForm(){
    this.form =this.frombuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
}
