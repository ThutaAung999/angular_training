import { Component } from '@angular/core';
import {ToDoService} from "../../services/to-do.service";

@Component({
  selector: 'app-to-do-count',
  templateUrl: './to-do-count.component.html',
  styleUrls: ['./to-do-count.component.scss']
})
export class ToDoCountComponent {

  count =0;

  constructor(private todoService:ToDoService) {
    this.todoService.todos.subscribe(data=>{
      this.count=data.length;
    });
  }
}
