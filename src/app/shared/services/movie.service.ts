import { Injectable } from '@angular/core';
import {Movie} from '../model/movie';

@Injectable()
export class MovieService {
  movies:Movie[]=[
    {
      title: 'Star Wars',
      overview: 'Star Wars Description...',
      pictureURL: 'https://cdn.dribbble.com/users/588874/screenshots/2291915/dribbble_1x.png'
    },
    {
      title: 'IT',
      overview:'IT Description...',
      pictureURL: 'https://img.cinemablend.com/filter:scale/quill/e/1/0/3/e/e/e103ee82b2d6307e4d881c75942ff473e08eb0e0.jpg?mw=600'
    },
    {
      title: 'Liga de la justicia',
      overview: 'Liga de la justicia descripcion...',
      pictureURL: 'http://s3-eu-west-1.amazonaws.com/cinemania-cdn/wp-content/uploads/2017/01/11145412/Justice-League-660x374.png'
    },
    {
      title: 'Minions',
      overview: 'Minions descripcion...',
      pictureURL: null
    }

  ]

  constructor() { }

  //Se desconoce el tiempo de ejecucion de getMovies
  getMovies():Promise<Movie[]>{ //DEVUELVE UN ARRAY DE OBJETOS MOVIES
    //Peticion HTTP al server
    //El server hace la consulta a una BD
    //return Promise.reject({
    //  message: 'Error de conexion con la BD'
    //});
    //Se procesan los datos obtenidos
    //Retorna el set de datos para el cliente
    //EN CASO DE RESULT 
    return Promise.resolve(this.movies);
    //return this.movies//opcion de devolucion de datos sin promise
  }
  
}
