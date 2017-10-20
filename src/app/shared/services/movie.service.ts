import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const MOVIES_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';
const API_KEY = '0971ed323ba8081b990144eef9e02ace';
const PICTURE_URL = 'https://image.tmdb.org/t/p/w160';
const DEFAULT_PICTURE_URL = 'https://image.freepik.com/free-vector/cinema-logo_23-2147503279.jpg';
const MOVIE_DETAIL_URL = 'https://api.themoviedb.org/3/movie/';

@Injectable()
export class MovieService {

  movies: Array<Movie> = [
    {
      title: 'Geostorm',
      overview: 'Geostorm description..',
      pictureURL: 'http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2017/08/geostorm_lead.jpg?itok=mCUhAmx8'
    },
    {
      title: 'IT',
      overview: 'IT description...',
      pictureURL: 'http://s3.amazonaws.com/www.tomatazos.com/public/uploads/images/156296_1140x516.jpg'
    },
    {
      title: 'Justice League',
      overview: 'Justice League description...',
      pictureURL: 'http://nerdist.com/wp-content/uploads/2017/03/justice-league-movie-team-photo-1200x630.jpg'
    },
    {
      title: 'Minioms',
      overview: 'Minioms description',
      pictureURL: null
    }
  ];

  constructor(private http: HttpClient) { }

  getMovies2(): Promise<Array<Movie>> {
    //Peticion HTTP al server
    //El server hace consultas a una BD
    //Se procesan los datos obtenidos
    //Retorna el set de datos para el cliente
    this.http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0971ed323ba8081b990144eef9e02ace').subscribe(
      data => {
        console.log(data['results']);
      }
    );
    return Promise.resolve(this.movies);
    // return Promise.reject({
    //   message: 'Error de conexion con la BD'
    // });
  }

  getMovies(): Observable<any> {
    return this.http.get(`${MOVIES_API}&api_key=${API_KEY}`) ;
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

  getMovie(id: string): Observable<any> {
    return this.http.get(`${MOVIE_DETAIL_URL}${id}?api_key=${API_KEY}`);
  }
}
