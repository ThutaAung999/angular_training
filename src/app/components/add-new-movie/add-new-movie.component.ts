import {Component, inject, Input, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ModalDismissReasons, NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ToDoService} from "../../services/to-do.service";
import {MovieService} from "../../services/movie.service";
import {MovieDto} from "../../dto/movie-dto.model";
import {ToDoItem} from "../../model/to-do-item.model";
import {IDropdownSettings} from 'ng-multiselect-dropdown'

@Component({
  selector: 'app-add-new-movie',
  templateUrl: './add-new-movie.component.html',
  styleUrls: ['./add-new-movie.component.scss']
})
export class AddNewMovieComponent {

  @Input()
  childMovieDto!: MovieDto;

  //editMode!:boolean;

  @ViewChild(TemplateRef<any>) content!: TemplateRef<any>;
  private modalService = inject(NgbModal)
  private modalRef?: NgbModalRef;
  closeResult = '';

  movieForm: FormGroup;

  movies:Array<MovieDto>=[];


  //for ng-multiselect-dropdown
  dropdownGenreList:Array<string> = [];
  selectedGenreItems:Array<string> = [];
  dropdownSettings :IDropdownSettings = {};




  constructor(private fb: FormBuilder,
              private movieService: MovieService) {

    this.movieForm = this.fb.group({
      title:['',[Validators.required]],
      year:[0,[Validators.required]],
      genres:['',[Validators.required]],
     /* actors:['',Validators.required],
      directors:['',Validators.required],*/

    });
    this.movieService.movies.subscribe(movies => {
      this.movies = movies;
      console.log("Movies  :",this.movies);
    })
  }


  ngOnInit(): void {

    //for ng-multiselect-dropdown
    this.dropdownGenreList = [
        'Action' ,
      'Drama' ,
      'Horror' ,
       'Romance' ,
      'Thriller' ,
      'Western' ,
      'Comedy' ,
       'Comedy genre' ,
       'Science fiction' ,
       'Movie genres' ,
    ];
    this.selectedGenreItems = [
      /*{ item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }*/
    ];

    this.dropdownSettings = {
      singleSelection: false,
      /*idField: 'id',*/
      /*textField: 'item_text',*/
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      limitSelection: -1,
      maxHeight: 200,
      itemsShowLimit: 3,

      allowSearchFilter: true,
      clearSearchFilter: true,
      closeDropDownOnSelection: false,
      showSelectedItemsAtTop: false,
      defaultOpen: false,
    };

  }


  showNewMovieModal(content:TemplateRef<any>) {
    this.movieForm.reset();

    //this.editMode=false;

    //အောက်ကကောင်က လုံးဝ မဖွင့်နဲ့နော်  မလိုဘူး
    //this.modalRef = this.modalService.open(this.content, {size: 'lg'});
    this.modalService.open(content);

  }


  open(content: TemplateRef<any>) {

    this.movieForm.reset();

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

    this.childMovieDto=this.movieForm.value;

    console.log(JSON.stringify(this.childMovieDto));


    /*  if(this.editMode){
        console.log('Edit mode',this.childTodoItem);
        this.todoBackendService.updateTodo(this.childTodoItem);
      }
      else{
        this.todoBackendService.addNewTodo(this.childTodoItem);
      }

    */


//    this.movieService.addMovie(this.childMovieDto)
    this.movieForm.reset();


  }

  get form() {
    return this.movieForm.controls;
  }

  ////for ng-multiselect-dropdown

  public onFilterChange(item: any) {
    console.log(item);
  }
  public onDropDownClose(item: any) {
    console.log(item);
  }

  public onItemSelect(item: any) {
    console.log(item);
  }
  public onDeSelect(item: any) {
    console.log(item);
  }

  public onSelectAll(items: any) {
    console.log(items);
  }
  public onDeSelectAll(items: any) {
    console.log(items);
  }
}
