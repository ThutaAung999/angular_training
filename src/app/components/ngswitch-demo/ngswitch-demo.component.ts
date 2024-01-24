import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch-demo',
  templateUrl: './ngswitch-demo.component.html',
  styleUrls: ['./ngswitch-demo.component.scss']
})
export class NgswitchDemoComponent {

  cityName=["Yangon","Mandalay","Taungyi","Kalaw","Bago","Sagai"]

  city='ygn'

  /******/

  choice!:number;

  ngOnInit(){
    this.choice=1;
  }

  nextChoice():void{
    this.choice++;

    if(this.choice>5){
      this.choice=1;
    }
  }

 styleObj={color: 'white', 'background-color': 'blue'}
  styleClass={container1:false , container2:true}

  get entries(){
    return Object.entries(this.cityName)
  }
}
