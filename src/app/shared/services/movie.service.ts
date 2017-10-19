
import { Injectable } from '@angular/core';
//importando HttpClientModule
import { HttpClient        } from '@angular/common/http';
import { Movie             } from '../model/movie';
import { Observable        } from 'rxjs/Observable';

const MOVIES_API  = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';
const API_KEY     = '0971ed323ba8081b990144eef9e02ace';
const PICTURE_URL = 'https://image.tmdb.org/t/p/w160';
const DEFAULT_PICTURE_URL = 'https://angular.io/assets/images/logos/angular/angular.svg';

@Injectable()
export class MovieService {

  movies: Movie[];
  //  = [
  //   {
  //     title     : 'Star Wars',
  //     overview  : 'Star Wars description..',
  //     pictureURL: 'http://elordenmundial.com/wp-content/uploads/2017/01/starwarsinfive-1449855236991_large.jpg'
  //   },
  //   {
  //     title     : 'IT',
  //     overview  : 'It description..',
  //     pictureURL: 'http://mouse.latercera.com/wp-content/uploads/2017/07/it.jpg'
  //   },
  //   {
  //     title     : 'Injustic Leage',
  //     overview  : 'Injustic Leage description..',
  //     pictureURL: 'https://www.injustice.com/img/share.jpg'    
  //   },
  //   {
  //     title     : 'Minions',
  //     overview  : 'Minions description..',
  //     pictureURL: null    
  //   }
  // ];

  constructor(private http: HttpClient) { }

  // getMovies(): Promise<Movie[]> {
  //   /*
  //    * LO Q PUEDE HACER Y POR ESO SE USA PROMISE
  //    * 
  //    * Peticion HTTP al serve
  //    * Els server hace consultas a un BD
  //    */ 
  //   // return Promise.reject({
  //   //   message: 'Error de la base de datos'        //usando errores de promises
  //   // });
    
  //    /*
  //    * Se procesan los datos obtenido
  //    * Retorna el set de datos para el cliente
  //    */
  //   return Promise.resolve(this.movies);    // usando de promises
  // }

  getMovies(): Observable<any> {
    return this.http.get(`${MOVIES_API}&api_key=${API_KEY}`);
  }

  getPictureURL(posterPath: string): string {
    if(!posterPath) {
      return undefined;
    }
    return `${PICTURE_URL}${posterPath}`;
  }

  getDefaultPictureURL(): string {
    return DEFAULT_PICTURE_URL;
  }
}
