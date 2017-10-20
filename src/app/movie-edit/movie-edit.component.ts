import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from "../shared/model/movie";
import { ActivatedRoute } from "@angular/router";
import { NgModel, NgForm } from "@angular/forms";
import { MovieService } from "../shared/services/movie.service";

@Component({
  selector: 'adh-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  movie: Movie;
  movieId: any;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.movieId=this.activatedRoute.snapshot.paramMap.get('id');
    console.log();
    this.movieService.getDetailMovieId(this.movieId)
    .subscribe((data)=> {
      console.log('data', data);
      this.movie = data;
      this.movie.pictureURL=this.movieService.getPictureURL(this.movie['backdrop_path']);
      this.movie['fixedTitle']=this.movie.title;
    })
  }

}
