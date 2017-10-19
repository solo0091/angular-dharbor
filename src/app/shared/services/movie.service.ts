import { Injectable } from '@angular/core';
import { Movie } from "../model/movie";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

const MOVIES_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc'
const API_KEY = '0971ed323ba8081b990144eef9e02ace'
const PICTURE_URL = 'https://image.tmdb.org/t/p/w160'
const DEFAULT_PICTURE_URL = 'https://cdn2.iconfinder.com/data/icons/classic-development-circle/512/multimedia-512.png'


@Injectable()
export class MovieService {

  movies: Movie[];

  // Dependency Injection
  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get(`${MOVIES_API}&api_key=${API_KEY}`);
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

}
