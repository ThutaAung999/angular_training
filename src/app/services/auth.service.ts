import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn!:boolean;

  constructor() {
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }

  login(){
    this.isLoggedIn=true;
  }
}
