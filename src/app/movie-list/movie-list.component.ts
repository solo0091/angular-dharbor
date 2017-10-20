import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movie'
import { MovieService } from '../shared/services/movie.service'
import { Router } from '@angular/router'

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title: string = 'Popular Movies';
  
  movies: Movie[];
  //Dependency Injection
  constructor(private movieService: MovieService,
              private router: Router) {

  }

  ngOnInit() {
    this.movieService.getMovies()
    .subscribe((data) => {
      console.log('data', data);
      this.movies = data.results;
    })
  }

  onSelect(event: Movie){
    console.log('Selected', event);
    this.router.navigate(['movie', event.id]);
  }

  onClick(event: any){
    console.log('Click', event);
  }
}
