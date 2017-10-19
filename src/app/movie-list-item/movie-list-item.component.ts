import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../shared/model/movie';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'adh-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {

  //Input parameter
  @Input()
  movie: Movie;

  defaultPictureURL: string;


  constructor(private movieService: MovieService) { }

  ngOnInit() {
    //Borra un atributo del objeto movie
    //delete this.movie['poster_path'];

    this.movie.pictureURL = this.movieService.getPictureURL(this.movie['poster_path']);
    
    if (!this.movie['poster_path']) {
      this.defaultPictureURL = this.movieService.getDefaultPictureURL();
    }
  }

}
