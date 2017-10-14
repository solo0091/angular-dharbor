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

  defaultPictureURL:string='https://angular.io/assets/images/logos/angular/angular.png';

  movies:Movie[];


///DEPENDENCY INYECTION
  constructor(private movieService: MovieService) ///INYECTAMOS EN EL CONSTRUCTOR EL SERVICIO 
  { }

  ngOnInit() {

      this.movies=this.movieService.getMovies(); //Cargamos los datos en el arreglo dsd un servicio

  }

}
