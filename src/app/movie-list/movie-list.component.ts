import { Component, OnInit } from '@angular/core';
import { Movie } from "../shared/model/movie";
import { MovieService } from "../shared/services/movie.service";
import { Router } from "@angular/router";

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title: string = 'Popular Movies'

  movies: Movie[];

  //Dependency Injection
  constructor(private movieService: MovieService, private router: Router) {
    
  }

  ngOnInit() {
    this.movieService.getMovies()
      .subscribe(data => {
        console.log(data['results']);
        this.movies = data.results;
      })
  }

  onSelect(movie: Movie) {
    //this.router.navigateByUrl(this.movieService.getMovieDetailURL(movie['id']));
    this.router.navigate(['movie', movie.id]);
  }

  onClick(event: any) {
    console.log('Click Event', event);
  }

getTitle(): string {
  return this.title;
}
}
