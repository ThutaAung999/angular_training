import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {MovieDetails, MovieDto} from "../dto/movie-dto.model";
import {ToDoItem} from "../model/to-do-item.model";
import {HOST_URL} from "../../config/Api";

const API_URL = HOST_URL +"/movies/";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieStore:Array<MovieDto> =[];
  private _movies:BehaviorSubject<MovieDto[]>;

//  url: string = 'https://jsonplaceholder.typicode.com/todos/'

  constructor(private http:HttpClient) {
    this._movies = <BehaviorSubject<MovieDto[]>>new BehaviorSubject<MovieDto[]>([])
    this.loadAllMovies();
  }

  loadAllMovies() {
    this.getAllMovies().subscribe(data => {
      this.movieStore = data;
      this._movies.next(this.movieStore);
    })
  }

  getAllMovies() {//get All Movies From Database via REST API
    return this.http.get<Array<MovieDto>>(API_URL);//return Observable<MovieDto[]>
  }

  getMovieById(id: string) {
    return this.http.get<MovieDetails>(API_URL+ `${id}`);
  }

  /****getter/setter***********/
  get movies() {
    return this._movies.asObservable();
  }
  /*************************/

  addNewMovie(movie: MovieDetails) {

    return this.http.post<MovieDetails>(API_URL,movie).subscribe(data => {
      this.movieStore.unshift(data);
      this._movies.next(this.movieStore);
    })
  }

  updateMovie(movieDetails: MovieDetails) {

    console.log("Updated movie : ",movieDetails);

    return this.http.patch<MovieDetails>(API_URL+ movieDetails._id, movieDetails).subscribe(
      data => {
        this.movieStore = this.movieStore.map(ele => ele._id === movieDetails._id ? data : ele);
        this._movies.next(this.movieStore);
      })
  }
}
