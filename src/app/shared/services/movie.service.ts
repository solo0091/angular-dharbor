import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from "../model/movie";
import { Observable } from "rxjs/Observable";

const MOVIES_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc";
const API_KEY = "0971ed323ba8081b990144eef9e02ace";

const PICTURE_URL="https://image.tmdb.org/t/p/w160";

const DEFAULT_PICTURE_URL="https://angular.io/assets/images/logos/angular/angular.png";

@Injectable()
export class MovieService {


  movies: Movie[];

  //DEPENDENCY INYECTION
  constructor(private httpClient: HttpClient) { }


  ////Usamos la promesa para retornar un objeto promise
  //getMovies():Promise<Movie[]>
  //{ ///funcion que devuelve un arreglo de objetos con los datos del servicio

  //Peticion HTTP al server
  //El server hace consultas a una BD

  /*return Promise.reject({  ///En caso de que hubiera un error, se envia asi
    message:'Error de conexion con la BD'
  });*/

  //Se procesan los datos obtenidos
  //Retorna el set de datos para el cliente

  //  return Promise.resolve(this.movies) ///Est
  //}

  ///FUNCION QUE DEVUELVE UN OBSERVABLE
  getMovie(): Observable<any> {
    return this.httpClient.get(`${MOVIES_API}&api_key=${API_KEY}`); //Concatenamos el link del API
  }

  ///funcion que devolvera la url completa de la imagen de las peliculas, mandamos un parametro posterPath string para que pueda formar el path
  getPictureURL(posterPath:string):string{
    if(!posterPath){
      return undefined;
    }

    return `${PICTURE_URL}${posterPath}`; ///Concatemamos la URL completa para descarga la imagen
  }

  ///funcion que devuelve la url de una imagen por defecto en caso de no existir la original
  getDefaultPictureURL():string
  {
    return DEFAULT_PICTURE_URL;
  }

}
