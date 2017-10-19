import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movie';
import { MovieService } from '../shared/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title: string ='Popular Movies';
  resultados: string[];
  defaultPictureURL: string = 'https://www.w3schools.com/angular/pic_angular.jpg';
  // text: string  ='Description text'
  movies: Movie[];

  //Dependency Injection
  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    // setTimeout(()=>{
     // this.movies = this.movieService.getMovies();
    // }, 2000);
    // console.log('antes de llamar al servicio');
    // // Esta en un contexto mas interno
    // this.movieService.getMovies().then((result)=>{
    //   console.log('Tengo resultado');
    //   this.movies = result;
    // }).catch((error)=>{
    //   console.log('error', error.message);
    //   //this.message= error.message
    // });
    // console.log('Despues de movieService.getMovies()');
    //Llamadas a otros servicios
    //Otro tipo de procesamiento

    this.movieService.getMovies()
    .subscribe((data)=> {
      console.log('data', data);
      this.movies = data.results;
    })
  }

  onSelect(event: Movie){
    console.log('Selected', event)
  }

  onClick(event: any){
    console.log('Click', event)
    this.router.navigate(['movie', event.id]);
  }

}
