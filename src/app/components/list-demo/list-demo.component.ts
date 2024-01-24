import {AfterViewInit, ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {DummyMovieService} from "../../services/dummy-movie.service";
import {MovieComponent} from "../movie/movie.component";
import {AnalyticsService} from "../../services/analytics.service";

@Component({
  selector: 'app-list-demo',
  templateUrl: './list-demo.component.html',
  styleUrls: ['./list-demo.component.scss'],
})
export class ListDemoComponent implements AfterViewInit{


  @ViewChild(MovieComponent) childComp!:MovieComponent;
  messageFromChild!:string;

  /*movies=["Titanic","Shadow","Matrix"]*/
  movies:Array<string>=[]

  constructor(movieService:DummyMovieService ,
              private cd:ChangeDetectorRef,
              private analysticService:AnalyticsService,
              ) {
    console.log("listDemo constructor")
    this.movies=movieService.getMovieList()
  }

  addMovieHandler(){
    this.movies.push(" Movie :"+ (this.movies.length+1));
    this.analysticService.record({
      eventName:"Movie add",
      scope:"something scope"
    })

  }

  onChildMovieDelete( movieName:string){
    console.log("OnParent Movie delete : ", movieName)
    let index=this.movies.indexOf(movieName)
    this.movies.splice(index,1)
  }

  ngOnChanges(){
    console.log("Parent component ListDemo onChange")
  }

  ngAfterViewInit() {
    console.log(this.childComp.childMessage)
    this.messageFromChild=this.childComp.childMessage as string;

    this.cd.detectChanges()
  }
}
