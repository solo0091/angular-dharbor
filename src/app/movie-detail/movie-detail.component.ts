
import { Component, OnInit } from '@angular/core';
import { Movie             } from '../shared/model/movie'
import { MovieService      } from '../shared/services/movie.service';
import { ActivatedRoute    } from '@angular/router';

@Component({
  selector: 'adh-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
   
  constructor(private movieServie: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(params => {
      console.log('params', params);

      this.movieServie.getMovie(params.id)
      .subscribe((movie: Movie) => {
        this.movie = movie;
      });
    });
  }

}
