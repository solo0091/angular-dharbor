import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../model/movie';
import { Observable } from 'rxjs/Observable';

const MOVIES_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';
const MOVIE_API:string = 'https://api.themoviedb.org/3/movie';
const API_KEY = '0971ed323ba8081b990144eef9e02ace';
const PICTURE_URL = 'https://image.tmdb.org/t/p/w160';
@Injectable()
export class MovieService {

  movies: Movie[];

  // Dependency Injection
  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<any> {
    return this.httpClient.get<any>(`${MOVIES_API}&api_key=${API_KEY}`);
  }

  public getMovie(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>(`${MOVIE_API}/${id}?api_key=${API_KEY}`);
  }

  getMoviePicture(posterPath: string) {
    return `${PICTURE_URL}${posterPath}`;
  }
}



