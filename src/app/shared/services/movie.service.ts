import { Injectable } from '@angular/core';
import { Movie } from "../model/movie";

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

  constructor() { }

  getMovies(): Movie[] {
    return this.movies;
  }

}
