import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {MovieDetails, MovieDto} from "../../dto/movie-dto.model";
import {Router} from "@angular/router";
import {ToDoItem} from "../../model/to-do-item.model";

@Component({
  selector: '[app-movie-two]',
  templateUrl: './movie-two.component.html',
  styleUrls: ['./movie-two.component.scss']
})
export class MovieTwoComponent {

  @Input()
  movie!:MovieDto;

  @Output()
  deleteEvent :EventEmitter<MovieDto>=new EventEmitter<MovieDto>();

  @Output()
  editEvent :EventEmitter<MovieDto>=new EventEmitter<MovieDto>();


  constructor(private router:Router) {}


  onDeleteClick(){
    console.log('onDeleteClick() is triggered')
    this.deleteEvent.emit(this.movie);
  }

  onEditClick(){
    console.log('onEditClick() is triggered')

    console.log("Edit mode: ID ::::",this.movie._id)

    this.editEvent.emit(this.movie);
  }

  movieDetails(movie:MovieDto){

    console.log("Movie Details click :",movie);

    this.router.navigate(["/movie-details-page/"+this.movie._id])
  }
}
