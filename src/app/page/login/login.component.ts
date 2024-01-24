import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  /*constructor(private router:Router) {
  }
  login(){
    localStorage.setItem("token",Math.random().toString());
    this.router.navigate(['admin-page'])
  }*/

  constructor(private authService:AuthService, private router:Router) {
    console.log("login constructor")
    /*if(this.authService.isAuthenticated()){
      this.router.navigate(['admin-page'])
    }*/
  }


  ngOnInit(){
    console.log("login componeht ngOnInit lifecycle")
    if(this.authService.isAuthenticated()){
      this.router.navigate(['/admin-page'])
    }
  }

  login(){
    this.authService.login();

    if(this.authService.isAuthenticated()){
      this.router.navigate(['/admin-page'])
    }

  }
}
