import { Injectable } from '@angular/core';
import { Movie } from '../model/movie'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

const MOVIES_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';
const API_KEY = '0971ed323ba8081b990144eef9e02ace';
const PICTURE_URL = 'https://image.tmdb.org/t/p/w160';
const DEFAULT_PICTURE_URL = 'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/033/thumb/egghead-angular-material-course-sq.png'
const MOVIE_DETAIL = 'https://api.themoviedb.org/3/movie'

@Injectable()
export class MovieService {
  //definir temporalmente todos nuestros objetos

  movies: Movie[]

  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<any> {
    return this.httpClient.get(`${MOVIES_API}&api_key=${API_KEY}`);
  } 

  getPictureURL(posterPath: string): string {
    if(!posterPath){
      return undefined;
    }
    return `${PICTURE_URL}${posterPath}`
  }

  getDefaultPictureURL(): string {
    return DEFAULT_PICTURE_URL;
  }

  getMovie(id: number): Observable<any> {
    return this.httpClient.get(`${MOVIE_DETAIL}/${id}?api_key=${API_KEY}`);
  }
}
