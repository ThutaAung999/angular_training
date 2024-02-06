import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {ToDoItem} from "../../model/to-do-item.model";
import {AddNewTodoComponent} from "../../components/add-new-todo/add-new-todo.component";

@Component({
  //selector: 'app-second-page',
  selector: 'todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent {

  parentTodoItem!: ToDoItem;

  @Output()
  editEvent :EventEmitter<ToDoItem>= new EventEmitter<ToDoItem>();

  @ViewChild(AddNewTodoComponent) addNewTodo!:AddNewTodoComponent;

  onTodoEditHandler(todoItem: ToDoItem) {
    this.addNewTodo.editMode=true;
    //console.log("Edit todo  item  within todo-list-page: ", todoItem);
    this.parentTodoItem = todoItem;
    this.addNewTodo.open(this.addNewTodo.content);
    this.addNewTodo.todoForm.patchValue({...todoItem});
    //console.log(" Form JSON : " , this.addNewTodo.todoForm.value)
  }
}
