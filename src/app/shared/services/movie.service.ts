import { Injectable } from '@angular/core';
import { Movie } from "../model/movie";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

const MOVIES_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc'
const API_KEY = '0971ed323ba8081b990144eef9e02ace'
@Injectable()
export class MovieService {

  movies: Movie[] = [
    {
      title: 'Star Wars',
      overview: 'Star Wars description',
      pictureUrl: 'http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2017/01/sw-the-last-jedi-tall-1200x630.jpg'
    }, {
      title: 'IT',
      overview: 'IT description',
      pictureUrl: 'https://i.ytimg.com/vi/A4PuQCWDcM4/maxresdefault.jpg'
    }, {
      title: 'Justice League',
      overview: 'Justice League description',
      pictureUrl: 'https://www.dekora.es/wp-content/uploads/2017/09/231088-DISCO-DE-AZUCAR-16-CM-SUPERMAN-Y-BATMAN-AZF_1-300x300.jpg'
    }, {
      title: 'Minions',
      overview: 'Minions description',
      pictureUrl: null
    }, {
      title: 'Impire of the Sun',
      overview: 'Impire of the Sun description',
      pictureUrl: 'http://4.bp.blogspot.com/-QA047u9woyQ/Vlg8gnzSvAI/AAAAAAAAOuI/XEj8fDafKdM/s1600/sol.jpg'
    }
  ];

  // Dependency Injection
  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get(`${MOVIES_API}&api_key=${API_KEY}`);
  }

}
