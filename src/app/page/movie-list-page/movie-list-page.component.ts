import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {MovieDto} from "../../dto/movie-dto.model";
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

  @Output()
  editEvent:EventEmitter<MovieDto>=new EventEmitter<MovieDto>();

  @ViewChild(AddNewMovieComponent) addNewMovie!:AddNewMovieComponent;

  onMovieEditHandler(movieDto:MovieDto){
      this.addNewMovie.editMode=true;

      console.log("Edit movie  within movie-list-page", movieDto);
      this.parentMovieDto=movieDto;
      this.addNewMovie.open(this.addNewMovie.content);
      this.addNewMovie.movieForm.patchValue({...movieDto})

  }
}

