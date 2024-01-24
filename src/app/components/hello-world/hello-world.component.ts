import {Component} from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent {

  currentCustomer = 'Maria';
  angularLogo='https://angular.io/assets/images/logos/angular/angular.png'

  isUnchanged=true;

  constructor() {
    console.log("HelloWorld component constructor called.")
  }

  ngOnInit() {
    console.log("HelloWorld component Initialized")
  }

  ngAfterContentInit() {
    console.log("HelloWorld component ngAfterContentInit")
  }

  ngAfterContentChecked() {
    console.log("HelloWorld component ngAfterContentChecked")
  }

  ngAfterViewInit() {
    console.log("HelloWorld component ngAfterViewInit")
  }

  ngOnDestroy(){
    console.log("HelloWorld component ngOnDestroy")
  }

  get color(){
    console.log("get color");
    return "green";
  }
}
