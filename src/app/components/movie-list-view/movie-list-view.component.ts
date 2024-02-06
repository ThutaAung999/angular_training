import {Component, EventEmitter, Output} from '@angular/core';
import {MovieDto} from "../../dto/movie-dto.model";
import {MovieService} from "../../services/movie.service";
import {ToDoItem} from "../../model/to-do-item.model";

@Component({
  selector: 'app-movie-list-view',
  templateUrl: './movie-list-view.component.html',
  styleUrls: ['./movie-list-view.component.scss']
})
export class MovieListViewComponent {

  @Output()
  editEvent:EventEmitter<MovieDto>= new EventEmitter<MovieDto>();

  movies: Array<MovieDto> = [];
  //
  constructor(private movieService: MovieService) {}

  ngOnInit(){

    this.movieService.movies.subscribe(data=>{
      this.movies = data;
    })
  }

  onMovieEditEvent(movieDto: MovieDto) {
    console.log("Edit movie  within movie-list-view", movieDto);
      this.editEvent.emit(movieDto);
  }
}
