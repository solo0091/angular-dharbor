import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../shared/services/movie.service';
import { Movie } from '../shared/model/movie';
import { NgModel } from '@angular/forms';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'adh-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  bufferValue = 75;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      console.log('Params', params);
      this.movieService.getMovie(params['id']).subscribe((movie: Movie) => {
        this.movie = movie;
      });
    });
  }

  onClick(movie: Movie) {
    this.router.navigate(['movie', movie.id, 'edit']);
  }

}
