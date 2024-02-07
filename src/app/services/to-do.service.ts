import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToDoItem} from "../model/to-do-item.model";
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private _todos: BehaviorSubject<ToDoItem[]>;
  todoDataStore: Array<ToDoItem> = [];

  url: string = 'https://jsonplaceholder.typicode.com/todos/'

  constructor(public http: HttpClient) {

    this._todos = <BehaviorSubject<ToDoItem[]>>new BehaviorSubject<ToDoItem[]>([])

    this.loadToDos();
  }


  loadToDos() {
    this.getTodos().subscribe(data => {
      this.todoDataStore = data;
      this._todos.next(this.todoDataStore);
    })
  }

  getTodos() {
    return this.http.get<Array<ToDoItem>>(this.url);
  }

  getTodoById(id: string) {
    return this.http.get<ToDoItem>(this.url + `${id}`);
  }


/****getter/setter***********/
  get todos() {
    return this._todos.asObservable();
  }
  /*************************/


  addNewTodo(todoItem: ToDoItem) {

    return this.http.post<ToDoItem>(this.url, todoItem).subscribe(data => {
      this.todoDataStore.unshift(data);
      this._todos.next(this.todoDataStore);
    })
  }

  updateTodo(todoItem: ToDoItem) {

    return this.http.put<ToDoItem>(this.url + todoItem.id, todoItem).subscribe(
      data => {
        this.todoDataStore = this.todoDataStore.map(ele => ele.id === todoItem.id ? data : ele);
        this._todos.next(this.todoDataStore);
      })
  }

  deleteTodo(todoItem: ToDoItem) {
    return this.http.delete<ToDoItem>(this.url + todoItem.id).subscribe(data => {
      this.todoDataStore = this.todoDataStore.filter(ele => ele.id != todoItem.id);
      this._todos.next(this.todoDataStore);
    });
  }

}
