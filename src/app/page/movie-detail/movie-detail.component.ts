import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ToDoService} from "../../services/to-do.service";
import {MovieDetails} from "../../dto/movie-dto.model";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {

  id: string = '';

  movieDetails!:MovieDetails;

  constructor(private activatedRoute: ActivatedRoute,
              private movieBackendService:MovieService,){}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['movieId'];

      console.log("Movie details Id : ", this.id);

      this.movieBackendService.getMovieById(this.id).subscribe(movieDetails => {
        this.movieDetails = movieDetails;
        console.log(" MovieDetails :",this.movieDetails);
      })
    })
  }
}
