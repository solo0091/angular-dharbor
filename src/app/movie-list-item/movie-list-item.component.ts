import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from '../shared/model/movie';
import { MovieService  } from '../shared/services/movie.service';
import {  Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'adh-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {
  // imput parameter
  @Input()
  movie: Movie;

  @Output()
  select: EventEmitter<any> = new EventEmitter<any>() ;

  defaultPictureURL;
  constructor(private movieService: MovieService, private router: Router, aroute: ActivatedRoute) { }

  ngOnInit() {
    // delete this.movie['poster_path'];
    // this.movie['poster_path'] = null;
    this.movie.pictureURL = this.movieService.getPictureURL(this.movie['poster_path']);

    if( !this.movie['poster_path']) {
    this.defaultPictureURL = this.movieService.getDefaultPictureURL();

  }
}



  onClick(): void {
    // Propagar, emitir evento, objeto, etc
    this.select.emit(this.movie);

    this.router.navigate(['/movie/' + this.movie['id']]);


  }



}
