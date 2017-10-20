import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { MovieService } from '../shared/services/movie.service';
import { Movie } from '../shared/model/movie';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'adh-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: any;

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  bufferValue = 75;
  isLoading = true;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params) => {
      console.log('Params', params);
      this.movieService.getMovie(params['id']).subscribe((movie: Movie) => {
        this.movie = movie;
        this.isLoading = false;
      });
    })
  }

}
