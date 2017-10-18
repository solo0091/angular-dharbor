import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../shared/services/movie.service';
import { Movie } from '../shared/model/movie';

@Component({
  selector: 'adh-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {

  @Input()
  movie: Movie;

  @Output()
  select: EventEmitter<any> = new EventEmitter<any>();

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movie.pictureURL = this.movieService.getMoviePicture(this.movie['poster_path']);
  }

  onClick(): void {
    this.select.emit(this.movie);
  }
}
