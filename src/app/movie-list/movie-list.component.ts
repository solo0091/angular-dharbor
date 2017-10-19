import { Component, OnInit } from '@angular/core';
import {  Movie } from "../shared/model/movie";
import { MovieService   } from "../shared/services/movie.service";//importamos el servicio

import { Router } from '@angular/router';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title:string='Popular Movies'; ///aca definimos la variable y esto se recuperara en el archivo .html

//  defaultPictureURL:string='https://angular.io/assets/images/logos/angular/angular.png';

  movies:Movie[]; ///El objeto de todas las peliculas
  
  selectedMovie:Movie; ///La pelicula seleccionada



///DEPENDENCY INYECTION                         ///INYECTAMOS EN EL CONSTRUCTOR EL SERVICIO 
constructor(private movieService:MovieService,private router:Router) ///INYECTAMOS EN EL CONSTRUCTOR EL API DE MOVIE 
                                                                     ////INYECTAMOS EL ROUTER
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
          //console.log('data',data);
          this.movies=data.results;
      })
      
    }
    onSelect(event:Movie){ ///EN EL EVENTO QUE ESPERAMOS RECIBIR ES EL OBJETO PEICULA QUE LANZO EL EVENTO, desde el hijo
      
      this.selectedMovie=event; ///Guardamos en otra objeto la movie seleccionada llamada event
     }

     ///Evento que se lanza cuando se hace click, redireccionamosa otra pagina con el detalle de la pelicula en cuestion
     onClick():void{ ///AL HACER CLICK SE IRA AL DETALLE DE LAS PELICULAS
        
      this.router.navigate(['/movie',this.selectedMovie['id']]); ///para utilizar el router se debe inyectar su instacia
        
     }


}
