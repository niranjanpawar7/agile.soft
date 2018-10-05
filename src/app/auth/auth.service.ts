import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class AuthService {
  
  constructor(private myRoute: Router) { }


    sendToken(token: string) { 
      localStorage.getItem('usertoken');
    }


    getToken() { 
      return localStorage.getItem("usertoken")
    }

    isLoggednIn() { 
      return this.getToken() !== null;
    }

    logout() {
      localStorage.removeItem("usertoken");
      this.myRoute.navigate(["Login"]);
    }

}
