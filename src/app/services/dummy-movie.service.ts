import { Injectable } from '@angular/core';
import {DummyFakeService} from "./dummy-fake.service";

@Injectable({
  providedIn: 'root'
})
export class DummyMovieService {

  constructor(dummyFakeService:DummyFakeService) {
    console.log("DummyService createtd")
  }
  public getMovieList(){
    return    ["Titanic","Shadow","Matrix"];
  }
}
