import {Injectable} from '@angular/core';

import {HOST_URL} from "../../config/Api";
import {Actor, Director} from "../dto/movie-dto.model";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

const API_URL = HOST_URL + "/directors";


@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  directorStore: Array<Director> = [];
  private _directors: BehaviorSubject<Director[]>;

//  url: string = 'https://jsonplaceholder.typicode.com/todos/'

  constructor(private http: HttpClient) {
    this._directors = <BehaviorSubject<Director[]>>new BehaviorSubject<Director[]>([])
    this.loadAllDirectors();
  }

  loadAllDirectors() {
    this.getAllDirectors().subscribe(data => {
      this.directorStore = data;
      this._actors.next(this.directorStore);
    })
  }

  getAllDirectors() {//get All Directors From Database via REST API
    return this.http.get<Array<Director>>(API_URL);//return Observable<Director[]>
  }

  /****getter/setter***********/
  get directors() {
    return this._directors.asObservable();
  }
  /*************************/
}
