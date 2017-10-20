
import { Component   , 
         Input       ,
         Output      ,
         EventEmitter, 
         OnInit         } from '@angular/core';
//import { Router       } from '@angular/router';
import { Movie          } from '../shared/model/movie';
import { MovieService   } from '../shared/services/movie.service';

@Component({
  selector: 'adh-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {
  /*
   * Interacion entre componentes padre->hijo
   * 
   * Input parameter
   */
  @Input()
  movie: Movie;

  /*
   * Interacion entre componentes hijo->padre
   * 
   * Output parameter
   */
  @Output()
  select: EventEmitter<any> = new EventEmitter<any>();

  defaultPictureURL: string;

  /*
   * INJECTAR MOVIE SERVICES
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

  onClick(): void {
    // Propagar, emitir un evento, objeto,etc
    this.select.emit(this.movie);
    
    //hecho por mi mejor seria en el item superior
    //this.router.navigate(['movie', this.movie['id']])
  }

}
