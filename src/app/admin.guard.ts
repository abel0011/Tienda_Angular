import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';
//TODO:MAP OBSERVABLE FLUJO DE DATOS CONTINUO
//TODO: FORMA DE DEBUGEAR TAP 
import { map, tap } from 'rxjs/operators'
import { AuthService } from './core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private AuthService: AuthService,
    private router :Router
  ) { }

  canActivate(
    //TODO: ESTE ELEMENTOEN BASE A LA RUTA ME VA DEVOLVER UN OBSERVABLE  PROMESA O UN BOOLEAN
    route: ActivatedRouteSnapshot,
    //TODO:LA RESPUESTA PUEDE ESTAR DENTOR DE UN OBSERVABLE
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //TODO: CONTROLAR EL USO DE LAS RUTAS CON TRUE O FALSE
    //TODO:PIPI (EL VALOR DEL USUARIO TRANSFORMALO)
    return this.AuthService.hasUser().pipe(
      //TODO:GENERAR UNA INTERCEPCION CON EL FLUJO DE DATOS QUE ME PERMITE HACER UNA IMPRESION SIN MUTAR DATOS
      // tap(user=> console.log(user)),

      // TODO:SI EL USUARIO ES IGUAL A NULO DEVUELVA UN TRUE
      map(user => user === null ? false : true),
      tap(Hasuser =>{
        if(!Hasuser){
          this.router.navigate(['/Auth/Login'])
        }
      })
    );
  }

}
