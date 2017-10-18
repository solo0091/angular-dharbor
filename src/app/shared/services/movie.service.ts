import { Injectable } from '@angular/core';
import { Movie } from "../model/movie";


@Injectable()
export class MovieService {
  movies:Movie[]=[
    
        {
          title:'Start Wars', 
          overview: 'description', 
          pictureURL: 'https://st-listas.20minutos.es/images/2013-03/358560/list_640px.jpg?1389462516'
        },{
          title:'It', 
          overview: 'description',
          pictureURL: 'https://st-listas.20minutos.es/images/2013-03/358560/list_640px.jpg?1389462516'
        },{
          title:'Justice League', 
          overview: 'description',
          pictureURL: 'https://st-listas.20minutos.es/images/2013-03/358560/list_640px.jpg?1389462516'
        },
        {
          title:'minion', 
          overview: 'description4',
          pictureURL: ''
        }
    
      ];

  constructor() { }
  //arreglo de objectos
  //getMovies(): Movie[]{
    getMovies(): Promise<Movie[]>{
      //return this.movies;
      //peticion http al server
      //el server hace una querry al bd 
      //
      //return Promise.reject({message:'error de conexxion co la db'});
      //se procesan los resultados
      //retorna el set de datos para el cliente
      
      
      return Promise.resolve(this.movies);
  }

}
