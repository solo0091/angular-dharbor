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
  movies: Movie[];
  // Dependency Injection
  constructor(private movieService: MovieService) { 
  }

  ngOnInit() {
    this.movieService.getMovies()
    .subscribe((data)=> {
      console.log('data', data);
      this.movies = data.results;
    })
  }

  onSelect(event: any) {
    console.log('Selected', event);
  }
}



