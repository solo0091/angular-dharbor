import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movie';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title: string ='Popular Movies';
  defaultPictureURL: string = 'https://www.w3schools.com/angular/pic_angular.jpg';
  // text: string  ='Description text'
  movies: Movie[];

  //Dependency Injection
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    // setTimeout(()=>{
     // this.movies = this.movieService.getMovies();
    // }, 2000);
    console.log('antes de llamar al servicio');
    // Esta en un contexto mas interno
    this.movieService.getMovies().then((result)=>{
      console.log('Tengo resultado');
      this.movies = result;
    }).catch((error)=>{
      console.log('error', error.message);
      //this.message= error.message
    });
    console.log('Despues de movieService.getMovies()');
    //Llamadas a otros servicios
    //Otro tipo de procesamiento
    
  }

}
