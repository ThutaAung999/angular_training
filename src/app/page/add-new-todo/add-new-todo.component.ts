import {Component, inject, Input, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToDoItem} from "../../model/to-do-item.model";
import {ModalDismissReasons, NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ToDoService} from "../../services/to-do.service";

@Component({
  selector: 'app-add-new-todo',
  templateUrl: './add-new-todo.component.html',
  styleUrls: ['./add-new-todo.component.scss']
})
export class AddNewTodoComponent {

  @Input()
  childTodoItem!: ToDoItem;

  editMode!:boolean;


  @ViewChild(TemplateRef<any>) content!: TemplateRef<any>;


  todoForm: FormGroup;

  //todoItem!: ToDoItem;

  private modalService = inject(NgbModal)

  private modalRef?:NgbModalRef;

  closeResult = '';

  constructor(private fb:FormBuilder,
              private todoBackendService: ToDoService) {

    this.todoForm = this.fb.group({
      userId:[0,Validators.required],
      id:[0,Validators.required],
      title:['',[
                Validators.required,
                Validators.minLength(4),
                Validators.pattern("^[a-z A-Z]+$"),
              ]
        ],
      completed:[true,Validators.required],
    });
  }


  showNewTodoModal(content:TemplateRef<any>) {
    this.todoForm.reset();
    this.editMode=false;
    //this.modalRef = this.modalService.open(this.content, {size: 'lg'});
    this.modalService.open(content);

  }

  open(content: TemplateRef<any>) {

    this.todoForm.reset();

    //this.modalRef=this.modalService.open(content);

    this.modalRef=this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});

    this.modalRef.result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
        console.log(this.closeResult);//Save Click

      },
      (reason) => {// x နဲ့ ပိတ်ရင် လုပ်မဲ့ဟာ
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );

  }


  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }

  onSubmit(){

    console.log('Inside onsubmit');
   // this.modalRef?.close("Close");

    this.childTodoItem=this.todoForm.value;
    console.log(JSON.stringify(this.childTodoItem));

    if(this.editMode){
      console.log('Edit mode',this.childTodoItem);
      this.todoBackendService.updateTodo(this.childTodoItem);
    }
    else{
      this.todoBackendService.addNewTodo(this.childTodoItem);
    }



    this.todoForm.reset();
  }

  get form() {
    return this.todoForm.controls;
  }
}
