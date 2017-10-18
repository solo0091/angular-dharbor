import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class MoviesService {

  movies: Movie[];

  /*
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
  */

  constructor(private httpclient: HttpClient) { }
  /*
    getMovies(): Promise <Movie[] >{
        //return this.movies;
        return Promise.resolve(this.movies);
  
    }*/

  getMovies1(): Observable<any> {
    //return this.movies;
    return this.httpclient.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0971ed323ba8081b990144eef9e02ace');

  };
}


  



