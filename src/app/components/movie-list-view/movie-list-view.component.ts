import {Component, EventEmitter, Output} from '@angular/core';
import {MovieDto} from "../../dto/movie-dto.model";
import {MovieService} from "../../services/movie.service";
import {ToDoItem} from "../../model/to-do-item.model";
import Swal from "sweetalert2";

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

  onTodoDeleteEvent(movieDto: MovieDto) {
    console.log("Delete movie : ", movieDto);

    //ဖျက်မှာ ကျိန်းသေမှ အောက်က ဖျက်တဲ့ code ကို ခေါ်သင့်တယ် , သူ့ကို wrap လုပ်ရေးမယ်
  //  this.movieService.deleteMovie(movieDto);

    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        console.log('Successfully Deleted.')
        this.movieService.deleteMovie(movieDto);
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })

  }


  onMovieEditEvent(movieDto: MovieDto) {
    console.log("Edit movie  within movie-list-view", movieDto);
    console.log("movie-list-view : ID ::::",movieDto._id)
      this.editEvent.emit(movieDto);
  }
}
