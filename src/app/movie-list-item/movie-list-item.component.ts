
import { Component   , 
         Input       , 
         OnInit       } from '@angular/core';
import { Movie        } from '../shared/model/movie';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'adh-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {
  /*
   * Interacion entre componentes
   * 
   * Input parameter
   */
  @Input()
  movie: Movie;
  defaultPictureURL: string;

  /*
   * iNJECTAR MOVIE SERVICES
   */
  constructor(private movieServie: MovieService) { }

  ngOnInit() {
    /*
     * para probar el defautlt url
     * delete this.movies['poster_path'];
     * o
     * this.movies['poster_path'] = null o undefined;
     */

    this.movie.pictureURL = this.movieServie.getPictureURL(this.movie['poster_path']);

    if(!this.movie['poster_path']) {
      this.defaultPictureURL = this.movieServie.getDefaultPictureURL();
    }
  }

}
