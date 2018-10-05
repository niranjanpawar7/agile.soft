import { Injectable } from '@angular/core';
import { CanActivate,  CanActivateChild,  ActivatedRouteSnapshot, RouterStateSnapshot } from 
'@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})


export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private auth: AuthService, private myRoute: Router){} 

  canActivate( next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.isLoggednIn()){ 
      return true;
    }else{
      this.myRoute.navigate(["login"]);
      return false;
    }
  };


   canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean { 
     if(this.auth.isLoggednIn()){ 
       return true;
    }else{
      this.myRoute.navigate(["login"]);
      return false;
  };
}
}

 

