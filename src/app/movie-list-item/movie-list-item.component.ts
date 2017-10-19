import { Component,
         Input, 
         OnInit } from '@angular/core';
import { Movie } from "../shared/model/movie";
import { MovieService } from "../shared/services/movie.service";

@Component({
  selector: 'adh-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {
  // Input Parameter
  @Input()
  movie: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    // eliminamos el valor de poster_path
    //delete this.movie['poster_path'];
    //this.movie['poster_path'] = undefined;
    //this.movie['poster_path'] = null;
    this.movie.pictureUrl =  this.movieService.getPictureURL(this.movie['poster_path']);

    if (!this.movie['poster_path']) {
      this.movie.pictureUrl =  this.movieService.getDefaultPictureURL();
    }
  }

}
