import { Component, OnInit } from '@angular/core';
import { Movie } from "../../shared/model/movie";
import { MovieService } from "../../shared/services/movie.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'adh-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  constructor(private movieService:MovieService,
  private activatedRoute:ActivatedRoute) { }
  movie:Movie={};
  ngOnInit() {
    this.activatedRoute.params.
      subscribe(
        (params)=>{
          console.log(params);
        }
      );
   // this.movie=this.movieService.getMovieEdit();
   // console.log(this.movie);
  }

}
