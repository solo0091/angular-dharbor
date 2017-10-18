import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { Observable } from 'rxjs/Observable';

const MOVIES_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';
const API_KEY = '0971ed323ba8081b990144eef9e02ace';
const PICTURE_URL = 'https://image.tmdb.org/t/p/w160';
const DEFAULT_PICTURE_URL = 'https://image.flaticon.com/icons/png/128/83/83519.png';


@Injectable()
export class MovieService {

  movies: Movie[] = [
    {
      title: 'Star Wars',
      overview: 'Star Wars description...',
      pictureURL: 'http://cdn.images.express.co.uk/img/dynamic/galleries/64x64/246485.jpg'
    },
    {
      title: 'IT',
      overview: 'IT description...',
      pictureURL: 'http://i.ebayimg.com/images/g/Xd8AAOSwlf5ZwsfS/s-l64.jpg'
    },
    {
      title: 'Justice League',
      overview: 'Justice League description...',
      pictureURL: 'http://cdn.images.express.co.uk/img/dynamic/galleries/64x64/228887.jpg'
    },
    {
      title: 'Minions',
      overview: 'Minions description',
      pictureURL: null
    }
  ];
  constructor(private httpClient: HttpClient) { }

  // getMovies(): Promise<Movie[]> {
    // Simulando una peticion HTTP
    // El server hace consulta a una base de datos
    // return Promise.reject({
    //   message: 'Error de conexion con la base de datos.'
    // });
    // Se procesa los datos obtenidos
    // Retorna el set de datos para el cliente

    // return Promise.resolve(this.movies);
  // }

  getMovies(): Observable<any> {
    return this.httpClient.get(`${MOVIES_API}&api_key=${API_KEY}`);
  }

  getPictureURL(posterPath: string): string {
    return `${PICTURE_URL}${posterPath}`;
  }

  getDefaultPictureURL(): string {
    return DEFAULT_PICTURE_URL;
  }

}
