import { Injectable } from '@angular/core';
import { Movie } from '../model/movie'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

const MOVIES_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';
const API_KEY = '0971ed323ba8081b990144eef9e02ace';
const PICTURE_URL = 'https://image.tmdb.org/t/p/w160';
const DEFAULT_PICTURE_URL = 'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/033/thumb/egghead-angular-material-course-sq.png'

@Injectable()
export class MovieService {
  //definir temporalmente todos nuestros objetos

  movies: Movie[]

  /* = [
    {
      title: 'Star Wars',
      overview: 'Star Wars description....',
      pictureURL: 'http://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-Darth-Vader.png'
    },
    {
      title: 'IT',
      overview: 'IT description...',
      pictureURL:'http://www.sopitas.com/wp-content/uploads/2016/07/tim-curry-pennywise-it-pel%C3%ADcula-4-e1468431683235.png'
    },
    {
      title: 'Justice League',
      overview: 'Justice League description ...',
      pictureURL: 'http://previouslyempire.com/wp-content/uploads/2017/10/Justice_League_-_Logo_Signo.png'
    },
    {
      title: 'Iron Man',
      overview: 'Iron Man description....',
      pictureURL: null
    }
  ]*/
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
/*
  getMovieId(): Observable<any> {
    return this.httpClient.get(`id`);
  }
*/
}
