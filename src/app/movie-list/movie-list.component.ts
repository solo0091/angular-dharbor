import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movie';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title:string = 'Popular Movies';
  defaultPictureURL:string = 'https://angular.io/assets/images/logos/angular/angular.png';
  movies: Movie[];
  // Dependency Injection
  constructor(private movieService: MovieService) { 
  }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }
}



