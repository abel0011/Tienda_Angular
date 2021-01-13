import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularfireauth:AngularFireAuth) { 

  }
  createUser(email:string , password:string){
  return    this.angularfireauth.createUserWithEmailAndPassword(email,password);
  }

  login(email: string , password:string){
    return  this.angularfireauth.signInWithEmailAndPassword(email,password);
  }

  logaut(){
    return this.angularfireauth.signOut();
  }

  //TODO: TENEMOS UN USUARIO?
  hasUser(){
    ///TODO:RETORNANDO OBSERVABLE
  return    this.angularfireauth.authState

    // .subscribe(user =>{
    //   //TODO:SI USER ES IGUAL A NULO SIG QUE NO HAY USARIO
    //   console.log(user==null);

    // })
  }
}
