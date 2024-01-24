import {Component, EventEmitter, Input,Output} from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  childMessage="message from  child .";

  private _movieTitle = '';
  @Input()
  get movie(): string { return this._movieTitle; }
  set movie(movie: string) {
    this._movieTitle= movie + ' ->'  + movie.length;
  }

  /*@Input() movie: string = '';*/
/*  @Input('movie-name') movie: string = '';*/

  @Output() deleteMovie=new EventEmitter<string>();

  ngOnChanges() {
    console.log("Movie change")
  }

  onDeleteHandler(){
    console.log("Delete :", this.movie)
    this.deleteMovie.emit(this.movie)
  }
}
