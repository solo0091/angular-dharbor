import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../model/movie';
import { Observable } from 'rxjs/Observable';

const MOVIES_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';
const API_KEY = '0971ed323ba8081b990144eef9e02ace';
const POSTER_PATH = 'https://image.tmdb.org/t/p/w160';
@Injectable()
export class MovieService {

  movies: Movie[];

  // Dependency Injection
  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<any> {
    return this.httpClient.get(`${MOVIES_API}&api_key=${API_KEY}`);
  }

  getPictureURL(posterPath: string): string {
    if (!posterPath) {
      return undefined;
    }


    return `${POSTER_PATH}${posterPath}`;

  }
  getDefaultPictureURL(): string {
    return 'https://angular.io/assets/images/logos/angular/angular.png';

  }


}



