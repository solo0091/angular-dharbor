
import { Injectable } from '@angular/core';
import { Movie      } from '../model/movie';

@Injectable()
export class MovieService {

  movies: Movie[] = [
    {
      title     : 'Star Wars',
      overview  : 'Star Wars description..',
      pictureURL: 'http://elordenmundial.com/wp-content/uploads/2017/01/starwarsinfive-1449855236991_large.jpg'
    },
    {
      title     : 'IT',
      overview  : 'It description..',
      pictureURL: 'http://mouse.latercera.com/wp-content/uploads/2017/07/it.jpg'
    },
    {
      title     : 'Injustic Leage',
      overview  : 'Injustic Leage description..',
      pictureURL: 'https://www.injustice.com/img/share.jpg'    
    },
    {
      title     : 'Minions',
      overview  : 'Minions description..',
      pictureURL: null    
    }
  ];

  constructor() { }

  getMovies(): Promise<Movie[]> {
    /*
     * LO Q PUEDE HACER Y POR ESO SE USA PROMISE
     * 
     * Peticion HTTP al serve
     * Els server hace consultas a un BD
     */ 
    // return Promise.reject({
    //   message: 'Error de la base de datos'        //usando errores de promises
    // });
    
     /*
     * Se procesan los datos obtenido
     * Retorna el set de datos para el cliente
     */
    return Promise.resolve(this.movies);    // usando de promises
  }

}
