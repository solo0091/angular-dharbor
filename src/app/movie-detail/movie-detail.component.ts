import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MovieService} from '../shared/services/movie.service'
import {Movie} from '../shared/model/movie'

@Component({
  selector: 'adh-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie:Movie = {};
  constructor(private activateRoute: ActivatedRoute,
              private movieService:MovieService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params=>{
      console.log('params',params)
      this.movieService.getMovie(params.id).subscribe(((movie:Movie)=>{
        this.movie = movie;
      }))
    });
  }

}
