import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ToDoService} from "../../services/to-do.service";

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent {

  name:any;

  count =0;

  constructor(private todoService:ToDoService,
              private route:ActivatedRoute,
            ) {
    this.todoService.todos.subscribe(data=>{
      this.count=data.length;
    });
  }

  ngOnInit(){
    this.route.queryParams.subscribe(params=>{
      this.name=params['name']
      console.log("Parameter name :",this.name)
    })
  }
}
