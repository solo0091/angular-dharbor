import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movie';
import {MovieService  } from "../shared/services/movie.service";

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title:string='popular movies';
  text: string='texto';

  clickMessage:string='toco el boton';

  defaultPictureURL:string='https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg';
  
  movies: Movie[];
  
  
  
  constructor(private movieService:MovieService) { 

  }
  

  ngOnInit() {
    this.movieService.getMovies()
    .subscribe((data)=> {
      console.log('data', data);
      this.movies = data.results;
    })
  }
  onSelect(event:Movie){
    console.log('Selected', event);
  }
  
}
