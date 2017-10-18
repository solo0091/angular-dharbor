import { Injectable } from '@angular/core';
import {  Movie } from "../model/movie";
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
@Injectable()
export class MovieService {
  URL:string="https://api.themoviedb.org/3/discover/";
  KEY:string="0971ed323ba8081b990144eef9e02ace";
  movie:Movie[]=[
    {
      title:'Star Wars',
      overview:"Star Wars description",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-aJpCngIDEQXqxhB8EgI6OOOmJcbqly4Ko1loJA3EIAPjZWu"
    },
    {
      title:'Star Wars2',
      overview:"Star Wars description2",
      image:"https://images-na.ssl-images-amazon.com/images/I/51BGV8AJ4RL.jpg"
    }
  ];
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
  getMoviesURL(){
    return this.http.get(this.URL+"movie?sort_by=popularity.desc&api_key="+this.KEY);
  }
}
