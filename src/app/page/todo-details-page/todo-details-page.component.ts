import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ToDoService} from "../../services/to-do.service";
import {ToDoItem} from "../../model/to-do-item.model";

@Component({
  selector: 'app-todo-details-page',
  templateUrl: './todo-details-page.component.html',
  styleUrls: ['./todo-details-page.component.scss']
})
export class TodoDetailsPageComponent {

  id:string=''

  //ဒါက အဆင်ပြေတယ်နော်
  // todoItem:ToDoItem=new ToDoItem();

  todoItem!:ToDoItem;

  constructor(private activatedRoute: ActivatedRoute ,
              private todoService : ToDoService,
              ) {
  }

  ngOnInit(){

    this.activatedRoute.params.subscribe(params=>{
      this.id=params['todoId'];
      console.log("Todo details Id : ", this.id);
    })

    /* ဒီနည်းလမ်းလဲ အလုပ်လုပ်တယ်နော် , အဆင်ပြေတာနဲ့ရေးနိုင်

    this.id=this.activatedRoute.snapshot.params['todoId']
    console.log("Todo details Id : ", this.id);*/

    this.todoService.getTodoById(this.id).subscribe((todo)=>{
        this.todoItem=todo;
    })
  }
}
