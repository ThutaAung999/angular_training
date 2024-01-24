import {Injectable} from '@angular/core';

import {HOST_URL} from "../../config/Api";
import {Actor} from "../dto/movie-dto.model";
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

const API_URL = HOST_URL + "/actors";


@Injectable({
  providedIn: 'root'
})
export class ActorService {

  actorStore: Array<Actor> = [];
  private _actors: BehaviorSubject<Actor[]>;

//  url: string = 'https://jsonplaceholder.typicode.com/todos/'

  constructor(private http: HttpClient) {
    this._actors = <BehaviorSubject<Actor[]>>new BehaviorSubject<Actor[]>([])
    this.loadAllActors();
  }

  loadAllActors() {
    this.getAllActors().subscribe(data => {
      this.actorStore = data;
      this._actors.next(this.actorStore);
    })
  }

  getAllActors() {//get All Actors From Database via REST API
    return this.http.get<Array<Actor>>(API_URL);//return Observable<Actor[]>
  }

  /****getter/setter***********/
  get actors() {
    return this._actors.asObservable();
  }
  /*************************/
}
