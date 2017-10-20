import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../shared/services/movie.service';
import { Movie } from '../shared/model/movie';

@Component({
  selector: 'adh-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private movieService: MovieService) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(params =>{
      console.log('Params', params);
      this.movieService.getMovie(params.id)
      .subscribe((movie: Movie) => {
        this.movie = movie;
      });
    });
  }

  onEdit(movie: Movie) {
    this.router.navigate(['movie', movie.id, 'edit']);
  }

}



