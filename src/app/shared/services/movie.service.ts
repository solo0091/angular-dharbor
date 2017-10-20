import { Injectable } from '@angular/core';
import {  Movie } from "../model/movie";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
const URL:string="https://api.themoviedb.org/3/discover/";
const URL_ID:string="https://api.themoviedb.org/3/movie/";
const KEY:string="0971ed323ba8081b990144eef9e02ace";
const URL_IMAGE="https://image.tmdb.org/t/p/w185_and_h278_bestv2";
const NOIMAGE:string="data:image/png;base64,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";
@Injectable()
export class MovieService {
  movie:Movie[]=[
    {
      title:'Star Wars',
      overview:"Star Wars description",
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-aJpCngIDEQXqxhB8EgI6OOOmJcbqly4Ko1loJA3EIAPjZWu"
    },
    {
      title:'Star Wars2',
      overview:"Star Wars description2",
      imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51BGV8AJ4RL.jpg"
    }
  ];
  movieEdit:Movie;
  constructor(private http:HttpClient) { }
  getMovies():Promise<Movie[]>{
    // Peticion al server 
    // El server hace consultas a una BD
    // Se procesan los datos obtenidos
    // Retorna el set de datos para el cliente
   /* return Promise.reject({
      message:"Conexion con la bd"
    });*/
    return Promise.resolve(this.movie);
  }
  getMoviesURL(page:number):Observable<any>{
    return this.http.get(`${URL}movie?sort_by=popularity.desc&page=${page}&api_key=${KEY}`);
  }
  getMovie(id:number):Observable<any>{
    return this.http.get(`${URL_ID}${id}?api_key=${KEY}`);
  }
  getImageURL(poster_path:string):string{
    if(!poster_path){
      return undefined;
    }
    return `${URL_IMAGE}${poster_path}`;
  }
  getDefaultUrl():string{
    return NOIMAGE;
  }
  setMovieEdit(movie:Movie):void{
    this.movieEdit=movie;
  }
  getMovieEdit(){
    return this.movieEdit;
  }
}
