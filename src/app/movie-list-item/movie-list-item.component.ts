import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from '../share/model/movie';
import { MovieService } from '../share/services/movie.service';


@Component({
  selector: 'adh-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {
  // imput parameter
  @Input() movie: Movie;
  defaulPicturetURL: string;
  @Output() select: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.movie.path = this.movieService.getPictureUrl(this.movie['poster_path']);
    this.movie.title = this.movie['original_title']; // para que no se queje el compilador
    this.movie.updated = this.movie['release_date'];
    if (!this.movie['poster_path']) {
      this.defaulPicturetURL = this.movieService.getDefaultPictureURL(this.movie.path);
    }
  }
  setDateDMY( value: string ): string {
    const datas = value.split('-');
    return `${ datas[2]}-${ datas[1]}-${ datas[0]}` ;
  }
  onClick(movie: Movie): void {
    // propagar, emitir evento, object, etc;
    console.log('child..', this.movie);
    this.select.emit(this.movie);
  }
}
