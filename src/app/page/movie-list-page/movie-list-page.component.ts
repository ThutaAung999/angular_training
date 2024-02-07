import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {MovieDetails, MovieDto} from "../../dto/movie-dto.model";
import {ToDoItem} from "../../model/to-do-item.model";
import {AddNewTodoComponent} from "../../components/add-new-todo/add-new-todo.component";
import {AddNewMovieComponent} from "../../components/add-new-movie/add-new-movie.component";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.scss']
})
export class MovieListPageComponent {

  parentMovieDto!: MovieDto;

  parentMovieDetails!:MovieDetails;

  @Output()
  editEvent:EventEmitter<MovieDto>=new EventEmitter<MovieDto>();

  @ViewChild(AddNewMovieComponent) addNewMovie!:AddNewMovieComponent;


  onMovieEditHandler(movieDto:MovieDto){


      this.addNewMovie.editMode=true;

      console.log("Edit movie  within movie-list-page", movieDto);
    console.log("movie-list-page : ID ::::",movieDto._id)

    //movie-two ကပို့ကတည်းက MovieDto  နဲ့ ပို့ခဲ့လို့ MovieDto နဲ့ပြန်ဖမ်းမှ _id ကိုရမယ် ,
      this.parentMovieDto=movieDto;


    //ဒါနဲ့ဆို id မပါလာဘူး
      this.parentMovieDetails=movieDto as MovieDetails;

      this.addNewMovie.open(this.addNewMovie.content);
//      this.addNewMovie.movieForm.patchValue({...this.parentMovieDetails})

    //update လုပ်ဖို့  form data ထည့်တာ့ အဓိက ဒီနေရမှာပြင်ရမှာ .
    this.addNewMovie.movieForm.patchValue({
      title:this.parentMovieDto.title,
      year:this.parentMovieDto.year,
      genres:this.parentMovieDto.genres,
      actors:[this.addNewMovie.selectedActors1],
      directors:[this.addNewMovie.selectedDirectors1],
    })

  }
}

