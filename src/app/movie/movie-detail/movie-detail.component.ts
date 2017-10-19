import { Component, OnInit } from '@angular/core';
import { MovieService } from "../../shared/services/movie.service";
import { Movie } from "../../shared/model/movie";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'adh-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movieId:Movie;
  constructor(private movieService:MovieService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params)=>{
        console.log(params.id);
      }
    );
    let id=this.route.snapshot.params['id'];
    this.movieService.getMovie(id)
      .subscribe(
        (result)=>{
          this.movieId=result;
          this.movieId.imageUrl=this.movieService.getImageURL(this.movieId['poster_path']);
        },
        (error)=>{
          console.log(error);
        }
      );
  }

}
