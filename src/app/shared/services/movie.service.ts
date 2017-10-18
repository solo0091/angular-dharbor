import { Injectable } from '@angular/core';
import { Movie } from '../model/movie'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

const MOVIES_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc'
const API_KEY = '0971ed323ba8081b990144eef9e02ace'

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
}
