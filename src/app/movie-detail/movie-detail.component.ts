import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "../shared/services/movie.service";
import { Movie } from "../shared/model/movie";

@Component({
  selector: 'adh-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;

  constructor(private movieService: MovieService, 
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data)=>{
      this.movieService.getMovie(data['id']).subscribe((info: Movie) => {
        console.log(info);
        this.movie = info;
      })
    });
  }

}
