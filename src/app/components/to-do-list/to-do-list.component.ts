import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {

  @ViewChild('newItem') newItem!: ElementRef;

  list:Array<string>=[]

  addToDo(item:string){
    console.log("Add to do ;", item)
    this.list.push(item)

    //console.log("this.newItem :",this.newItem)
    this.newItem.nativeElement.value=''
  }
}
