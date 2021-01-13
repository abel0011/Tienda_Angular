import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form!:FormGroup;
  constructor(

    private formbuilder:FormBuilder,
    private router :Router,
    private auth :AuthService
  ) { 
    this.buildForm()
  }

  ngOnInit(): void {
  }
register(event :Event){
  event.preventDefault();
  if(this.form.valid){
    const value = this.form.value;
    this.auth.createUser(value.email,value.password)
    .then(()=>{
      this.router.navigate(['/Login']);
    })
  }
  console.log(this.form.value)
}
private  buildForm(){
  this.form =this.formbuilder.group({
    email:['',[Validators.required]],
    password:['',[Validators.required]]
  });
  }

}
