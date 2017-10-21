import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../shared/services/movie.service';
import { Movie } from '../shared/model/movie';

@Component({
  selector: 'adh-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  movie: Movie = {};

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  bufferValue = 75;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      console.log('Params', params);
      this.movieService.getMovie(params['id']).subscribe((movie: Movie) => {
        /*this.movie = movie;
        this.movie['fixedTitle'] = this.movie.title;*/
      });
    });
  }

}
