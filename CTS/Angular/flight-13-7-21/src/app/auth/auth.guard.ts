import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserauthenticationService } from '../user/service/userauthentication.service';
import { AuthgaurdService } from './authgaurd.service';
// import {jwt_decode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private auth: AuthgaurdService,
    private userAuthService : UserauthenticationService,
    private myRoute: Router){
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.userAuthService.isUserLoggedIn()){
      return true;
    }else{
      this.myRoute.navigate(["login"]);
      return false;
    }
  }
  
}
