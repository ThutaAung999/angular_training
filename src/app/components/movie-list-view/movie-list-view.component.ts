import { Component } from '@angular/core';
import {MovieDto} from "../../dto/movie-dto.model";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movie-list-view',
  templateUrl: './movie-list-view.component.html',
  styleUrls: ['./movie-list-view.component.scss']
})
export class MovieListViewComponent {

  movies: Array<MovieDto> = [];
  constructor(private movieService: MovieService) {
    this.movieService.movies.subscribe(data=>{
      this.movies = data;
    })
  }
}
