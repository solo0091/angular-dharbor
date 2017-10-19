import { Injectable } from '@angular/core';
import {Movie} from '../model/movie';
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';

const MOVIES_API='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';
const API_KEY ='0971ed323ba8081b990144eef9e02ace';
const PICTURE_URL ='https://image.tmdb.org/t/p/w160';
const DEFAULT_PICTURE_URL ='https://angular.io/assets/images/logos/angular/angular.png';

const MOVIE_URL ='https://api.themoviedb.org/3/movie';


@Injectable()
export class MovieService {

movies:Movie[];

 /* movies:Movie[]=[
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

  ]*/
///Dependency Injection
  constructor(private httpClient: HttpClient) { }

getMovies():Observable<any>{

  return this.httpClient.get(`${MOVIES_API}&api_key=${API_KEY}`);

}
//funcion que devuelve una url desde posterPath q es un string
getPictureURL(posterPath : string): string{
  if(!posterPath){
    return undefined;
  }
  return `${PICTURE_URL}${posterPath}`;
}

getDefaultPictureURL():string{
  return DEFAULT_PICTURE_URL;
}

getMovieDetail(idMovie:number):Observable<any>{
  return this.httpClient.get(`${MOVIE_URL}/${idMovie}?api_key=${API_KEY}`);
}


  //Se desconoce el tiempo de ejecucion de getMovies
  //getMovies():Promise<Movie[]>{ //DEVUELVE UN ARRAY DE OBJETOS MOVIES
    //Peticion HTTP al server
    //El server hace la consulta a una BD
    //return Promise.reject({
    //  message: 'Error de conexion con la BD'
    //});
    //Se procesan los datos obtenidos
    //Retorna el set de datos para el cliente
    //EN CASO DE RESULT 
    //return Promise.resolve(this.movies);
    //return this.movies//opcion de devolucion de datos sin promise
  
}
