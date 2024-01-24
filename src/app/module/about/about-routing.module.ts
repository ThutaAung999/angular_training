import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../home/home/home.component";
import {AboutComponent} from "./about/about.component";

const routes:Routes=[
  {
    path:'',
    component:AboutComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class AboutRoutingModule { }
