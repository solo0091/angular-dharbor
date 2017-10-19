import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Movie } from "../shared/model/movie";
import { MovieService } from "../shared/services/movie.service"


@Component({
  selector: 'adh-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {
  //parametros de entrada
  @Input()
  movie: Movie;

  //parametros de salida par evento
  @Output()
  select: EventEmitter<any> = new EventEmitter<any>();


  defaultPictureURL: string;

  constructor(private movieService: MovieService) { }

  ngOnInit() {

    delete this.movie['poster_path'];

    this.movie.pictureURL = this.movieService.getPictureURL(this.movie['poster_path']);
    if (!this.movie['poster_path']) {
      this.defaultPictureURL = this.movieService.getDefaultPictureURL();

    }

  }
  onClick():void
  {
    //emitir o propagar un evento o un objeto
this.select.emit(this.movie);

  }


}
