import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import {HomeRoutingModule} from "../home/home-routing.module";
import {AboutRoutingModule} from "./about-routing.module";



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule ,
    AboutRoutingModule
  ]
})
export class AboutModule { }
