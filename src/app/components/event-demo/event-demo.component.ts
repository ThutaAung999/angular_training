import { Component } from '@angular/core';

@Component({
  selector: 'app-event-demo',
  templateUrl: './event-demo.component.html',
  styleUrls: ['./event-demo.component.scss']
})
export class EventDemoComponent {

  hasBorder=true;
  /*classNames= {
    "calss-1": true,
    "class-2":false ,
  }*/

  classNames=["class-1","class-2"]
    data = 1 ;

    bgColor="lightGray"

  multiStyles = 'font-size: 1.2rem; color: cornflowerblue; font-style: bold;';
  onClickHandler(event:any){
    console.log("onCliclHandler :" ,event);
    this.data++;
  }

  onToggleBorderHandler(){
    this.hasBorder=!this.hasBorder;
  }

  ngDoCheck(){
    console.log("check ngDoCheck");
  }
}
