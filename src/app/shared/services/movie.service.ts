import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MovieListComponent } from '../../movie-list/movie-list.component';
const MOVIES_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';
const API_KEY = '0971ed323ba8081b990144eef9e02ace';
const PICTURE_URL = 'https://image.tmdb.org/t/p/w160'
const DEFAULT_PICTURE_URL = 'https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=461%2C0%2C864%2C864'

const MOVIE_DETAIL = 'https://api.themoviedb.org/3/movie/'

@Injectable()
export class MovieService {
  results: string[];
  movies2: Movie[];
  movies: Movie[] = [
    {
      title: 'Star Wars',
      overview: 'Starwars description....',
      pictureURL: 'https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=461%2C0%2C864%2C864'
    },
   {
      title: 'IT',
      overview: 'It description...',
      pictureURL: 'http://cdn.movieweb.com/img.news.tops/NECITK8IikJKGH_1_b/It-Movie-2017-Runtime-Stephen-King.jpg'
    },
    {
      title: 'Justice League',
      overview: 'Justice League descriptions...',
      // pictureURL: 'https://i.pinimg.com/236x/8d/72/44/8d724422f976e1342af3aafc12dd8598.jpg'
      pictureURL: null
    }
  ];
  constructor(private httpClient: HttpClient) { }

  getMovies(): Promise<Movie[]> {
    // peticion http al server
    // El server ahce consulta a una BD
    // Se procesan los datos obtenidos
    // Retorna el set de datos para el cliente
    return Promise.resolve(this.movies)

    // return Promise.reject({
    //  message: 'Error de conexion con la BD'
   // });
    // return this.movies;
  }

  getApiMoviestest() {

    this.httpClient.get(`${MOVIES_API}&api_key=${API_KEY}`).subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data['results'];
      console.log( this.results );
    });
  }

  getApiMovies(): Observable<any> {

    return this.httpClient.get(`${MOVIES_API}&api_key=${API_KEY}`);
      // return this.results = data['results'];


  }

  getPictureURL(posterPath: string): string {
    if (!posterPath) {
      return undefined;
    }
    return `${PICTURE_URL}${posterPath}`;
  }

    getDefaultPictureURL(): string {
       return DEFAULT_PICTURE_URL;
    }

   // get Detail Movie from id 
    getDetailMovie(id: any): Observable<any> {
      console.log('MovieID', id);
     //  return this.httpClient.get(`${MOVIE_DETAIL}/${id}?api_key=${API_KEY}`);
     return this.httpClient.get(`${MOVIE_DETAIL + id }?api_key=${API_KEY}`);
    }


}
