import { Injectable } from '@angular/core';
import { Movie } from "../model/movie";

@Injectable()
export class MovieService {

movies:Movie[]=[{
  title:'Thor',
  overview:'Esperemos sea buena peli',
  pictureURL:'http://huellalince.com/wp-content/uploads/2017/01/RAGNAROK.jpg'
},{
  title:'IT',
  overview:'Da miedo',
  pictureURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/IT_%282017_film%29_logo.svg/1280px-IT_%282017_film%29_logo.svg.png'
},{
  title:'Justice League',
  overview:'El mejor es flash',
  pictureURL:'https://cms-assets.tutsplus.com/uploads/users/237/posts/28774/image/justice-league-logo-5-texture-19.jpg'
},
{
  title:'Minions',
  overview:'Minions Overvie',
  pictureURL:null
}
]

  constructor() { }


getMovies():Movie[]{ ///funcion que retorna los datos del servicio
  return this.movies
}

}
