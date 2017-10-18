import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';

@Injectable()
export class MoviesService {

  movies: Movie[] = [
    {
      title: 'Star Wars',
      overview: 'description starwars',
      pictureAvatar: 'http://niceclipart.com/wp-content/uploads/2017/07/Darth-Vader-clipart-3.jpg'
    }, {
      title: 'IT',
      overview: 'description it',
      pictureAvatar: 'http://wtfonline.mx/wp-content/uploads/2017/09/itatuendo.jpg'


    }, {
      title: 'liga de la justicia',
      overview: 'description liga de la justicia',
      pictureAvatar: 'http://sm.ign.com/ign_es/screenshot/default/maxresdefault_efdj.jpg'
    }
    , {
      title: 'Minios....',
      overview: 'description de los minions',
      pictureAvatar: ''
    }

  ];

  constructor() { }

  getMovies(): Promise <Movie[] >{
      //return this.movies;
      return Promise.resolve(this.movies);

  }

}
