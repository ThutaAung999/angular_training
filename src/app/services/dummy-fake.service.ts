import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyFakeService {

  constructor() {
    console.log("DummyFakeService created" )
  }
  getFakeService(){
    console.log("getFakeService gets invoked")
  }
}
