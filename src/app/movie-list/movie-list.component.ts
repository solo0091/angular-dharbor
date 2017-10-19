import { Component, OnInit } from '@angular/core';
import {  Movie } from "../shared/model/movie";
import { MovieService   } from "../shared/services/movie.service";//importamos el servicio


@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title:string='Popular Movies'; ///aca definimos la variable y esto se recuperara en el archivo .html

//  defaultPictureURL:string='https://angular.io/assets/images/logos/angular/angular.png';

  movies:Movie[];



///DEPENDENCY INYECTION                         ///INYECTAMOS EN EL CONSTRUCTOR EL SERVICIO 
constructor(private movieService:MovieService) ///INYECTAMOS EN EL CONSTRUCTOR EL API DE MOVIE 
{ }

  ngOnInit() {

      //this.movies=this.movieService.getMovies(); //Cargamos los datos en el arreglo dsd un servicio
      
      /* PROMESA DEL SERVICIO
      this.movieService.getMovies().then((result)=>{ ///Se crea una funcion que contiene el resultado, 
      //se procesa una promesa, puede tomar segundos o varios, pero para no bloquear el flujo se usa la promesa asincronamente
        this.movies=result;
      }).catch((error)=>{//Para agarrar el resultado
          console.log('error',error.message);
      });
      */

      // Make the HTTP request:
      this.movieService.getMovie().
      subscribe((data)=>{
          console.log('data',data);
          this.movies=data.results;
      })
      
    
      
      

  }

}
