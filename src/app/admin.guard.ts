import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(
    //TODO: ESTE ELEMENTOEN BASE A LA RUTA ME VA DEVOLVER UN OBSERVABLE  PROMESA O UN BOOLEAN
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //TODO: CONTROLAR EL USO DE LAS RUTAS CON TRUE O FALSE
    return false;
  }
  
}
