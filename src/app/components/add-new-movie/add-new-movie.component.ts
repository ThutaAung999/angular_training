import {ChangeDetectorRef, Component, inject, Input, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ModalDismissReasons, NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ToDoService} from "../../services/to-do.service";
import {MovieService} from "../../services/movie.service";
import {Actor, Director, MovieDetails, MovieDto} from "../../dto/movie-dto.model";
import {ToDoItem} from "../../model/to-do-item.model";
import {IDropdownSettings} from 'ng-multiselect-dropdown'
import {DirectorService} from "../../services/director.service";
import {ActorService} from "../../services/actor.service";

@Component({
  selector: 'app-add-new-movie',
  templateUrl: './add-new-movie.component.html',
  styleUrls: ['./add-new-movie.component.scss']
})
export class AddNewMovieComponent {

  //for Edit case
  @Input()
  childMovieDto!: MovieDto;

  @Input()
  childMovieDetails!: MovieDetails;

  //for Edit case
  editMode!:boolean;

  @ViewChild(TemplateRef<any>) content!: TemplateRef<any>;
  private modalService = inject(NgbModal)
  private modalRef?: NgbModalRef;
  closeResult = '';

  movieForm!: FormGroup;

  movies:Array<MovieDto>=[];

  //for ng-multiselect-dropdown
  genres:Array<string>=[];

  /*actors:Array<String>=[];
  selectedActors:Array<String> = [];
*/
  actors1:{}[]=[];
  selectedActors1:{}[]=[];

  /*directors:Array<String>=[];
  selectedDirectors:Array<String> = [];
*/
  directors1: {}[]=[];
  selectedDirectors1:{}[] = [];

  //for ng-multiselect-dropdown
  /*ဒီနည်းကတော့ Actor ,Director တွေပါလို့  မသုံးသေးဘူး , ng-multiselect-dropdown နဲ့ အဆင်မပြေဘူး
  genres:{id:string,item:string}[]=[];
  actors:Array<Actor>=[];
  selectedActors:Array<Actor> = [];
  directors:Array<Director>=[];
  selectedDirectors:Array<Director> = [];
*/

  dropdownGenreList:Array<string> = [];
  selectedGenreItems:Array<string> = [];
  dropdownSettings :IDropdownSettings = {};

  // for actors and directors
  //dropdownSettingsForActors :IDropdownSettings = {};
  //dropdownSettingsForDirectors :IDropdownSettings = {};

  //{}[] မှာ IDropdownSettings ကို အောက်ကလို တစ်ခုတည်းပေါင်းသုံးထားတယ် , ခွဲသုံးရင် တစ်ခုစီရေးပေးမှ အဆင်ပြေတယ်
  dropdownSettingsForDirectorsAndActors :IDropdownSettings = {};

  //အောက်ကကကောင်တွေက မသုံးသေးပေမဲ့ လိုရမယ်ရ  bind ထားတာ။
  @ViewChild('multiSelect') multiSelect:any;
  @ViewChild('multiSelectForDirectors') multiSelectForDirectors:any;
  @ViewChild('multiSelectForActors') multiSelectForActors:any;



  constructor(private fb: FormBuilder,
              private movieService: MovieService,
              private directorService:DirectorService,
              private actorService:ActorService,
              private cdr:ChangeDetectorRef,
              ) {

    this.setForm();
  }

  private setForm(): void {
    this.movieForm = this.fb.group({
      title:['',[Validators.required]],
      year:[0,[Validators.required]],
      genres:['',[Validators.required]],
       actors:['',Validators.required],
       directors:['',Validators.required],

    });

    this.movieService.movies.subscribe(movies => {
      this.movies = movies;
      console.log("Movies =>>>>> :",this.movies);
    })
  /* ဒါက Array<string> ကိုသုံးတဲ့ကောင်
     this.actorService.actors.subscribe(actors=>{
      this.actors=actors.map(actor=>actor.name);
      console.log("Actors  :",this.actors);
    })*/

    //ဒါက {}[] ကိုသုံးတဲ့ကောင်
        this.actorService.actors.subscribe(actors=>{
      this.actors1=    actors.map(({ _id, name }) => ({ _id, name }))
      console.log("Actors =>>>>> :",this.actors1);
    })

    /* ဒါက Array<string> ကိုသုံးတဲ့ကောင်
    this.directorService.directors.subscribe(directors => {
      this.directors = directors.map(director=>director.name);
      console.log("Directors  :",this.directors);
    })*/

    //ဒါက {}[] ကိုသုံးတဲ့ကောင်
    this.directorService.directors.subscribe(directors=>{
      this.directors1=    directors.map(({ _id, name }) => ({ _id, name }))
      console.log("Directors =>>>>> :",this.directors1);
    })

  }



  public resetForm() {
    // beacuse i need select all crickter by default when i click on reset button.
    this.setForm();
    this.clearSelection();
    // i try below variable isAllItemsSelected reference from your  repository but still not working
    // this.multiSelect.isAllItemsSelected = true;
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

    //ဒါက  { }[]  ဆိုတဲ့ object array မသုံးပဲ Array<string> သုံးတဲ့ကောင်
    //this.dropdownSettings , this.dropdownSettingsForActors,this.dropdownSettingsForDirectors  = {
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

    //ဒါက  { }[]  ဆိုတဲ့ object array ကို သုံးတဲ့ကောင်
     this.dropdownSettingsForDirectorsAndActors = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
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

    this.editMode=false;

    this.modalService.open(content);

  }


  open(content: TemplateRef<any>) {

    this.movieForm.reset();

    this.modalRef=this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});

    this.modalRef.result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
        console.log(' Save click:',this.closeResult);//Save Click
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

  close(modal: any){

    console.log('Cancel close');
    modal.close('Cancel clicled');
    this.clearSelection();
  }

  //this is onDeselectAll( ) method
  clearSelection() {
    this.selectedGenreItems = [];
    this.selectedActors1=[];
    this.selectedDirectors1=[];
  }


  onSubmit(){

    console.log('Inside onsubmit');

    this.childMovieDetails=this.movieForm.value;
    //for add New movie only
   //this.movieService.addNewMovie(this.childMovieDetails)

    //console.log(JSON.stringify(this.childMovieDto));
    console.log(this.childMovieDto);


      if(this.editMode){
        console.log('Edit mode',this.childMovieDto);

        this.movieService.updateMovie(this.childMovieDto as MovieDetails)

      }
      else{

        this.movieService.addNewMovie(this.childMovieDetails)
      }



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
    console.log('Selected All:', items);


  }
  public onDeSelectAll(items: any) {
    console.log('Deselected All:', items);
    // Clear the array when deselecting all
    this.selectedGenreItems = [];
    this.selectedActors1=[];
    this.selectedDirectors1=[];

  }
}


