import { ActivatedRoute } from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movie';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'adh-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  movie: Movie ={};

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    //Como obterner nuestro objeto movie
    this.activatedRoute.params
    .subscribe(params => {
      this.movieService.getMovie(params.id)
      .subscribe((movie: Movie) => {
        this.movie = movie;
        this.movie['fixedTitle'] = movie.title;
      });
    });
  }

}
