import {Component, OnInit, inject, TemplateRef, EventEmitter, Output} from '@angular/core';
import {ToDoItem} from "../../model/to-do-item.model";
import {ToDoService} from "../../services/to-do.service";
import {Subject,BehaviorSubject} from "rxjs";




@Component({
  //selector: 'app-table-parent',
  selector: 'todo-list-view',
  templateUrl: './todo-list-view.component.html',
  styleUrls: ['./todo-list-view.component.scss']
})
export class TodoListViewComponent implements OnInit {

  id: number = 201;

  @Output()
  editEvent:EventEmitter<ToDoItem>= new EventEmitter<ToDoItem>();

  constructor(private todoBackendService: ToDoService) {

    /****Subject Test***

     const subject = new Subject();
     subject.next('event 0');
     subject.subscribe(event => console.log(event));

     subject.next('event 1');
     subject.next('event 2');
     subject.next('event 3');
     */

    /*** BehaviourSubject test*****

     const behaviorSubject = new BehaviorSubject('event -1');
     behaviorSubject.next('event 0');//ဒါကိုလဲလုပ်သွားတယ်
     behaviorSubject.subscribe(event => console.log(event));

     behaviorSubject.next('event 1');
     behaviorSubject.next('event 2');
     behaviorSubject.next('event 3');
     */
  }

  todos: Array<ToDoItem> = [
    /*  {
        title:'Task1'
      },
      {
        title:'Task2'
      }*/
  ]
  ngOnInit() {
    this.todoBackendService.todos.subscribe(data => {
      this.todos = data;
    });
  }

  onTodoDeleteEvent(todoItem: ToDoItem) {
    console.log("Delete todo  item : ", todoItem);
    this.todoBackendService.deleteTodo(todoItem);
  }

  onTodoEditEvent(todoItem: ToDoItem) {
    console.log("Edit todo  item  within todo-list-view: ", todoItem);
   this.editEvent.emit(todoItem);
  }
}
