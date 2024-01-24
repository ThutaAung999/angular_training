import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {


  constructor(private authService:AuthService, private router:Router) {
    console.log("admin constructor")
  }

  ngOnInit(){
    console.log("admin ngOnInit lifecycle")

  }
}
