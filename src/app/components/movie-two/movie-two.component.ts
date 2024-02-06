import {Component, inject, Input} from '@angular/core';
import {MovieDto} from "../../dto/movie-dto.model";
import {Router} from "@angular/router";

@Component({
  selector: '[app-movie-two]',
  templateUrl: './movie-two.component.html',
  styleUrls: ['./movie-two.component.scss']
})
export class MovieTwoComponent {

  @Input()
  movie!:MovieDto;

  constructor(private router:Router) {}

  movieDetails(movie:MovieDto){

    console.log("Movie Details click :",movie);

    this.router.navigate(["/movie-details-page/"+this.movie._id])
  }
}
