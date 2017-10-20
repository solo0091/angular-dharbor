import { Component, OnInit } from '@angular/core';
import { MovieService } from "../../shared/services/movie.service";
import { Movie } from "../../shared/model/movie";
import { ActivatedRoute,Router } from "@angular/router";

@Component({
  selector: 'adh-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movieId:Movie;
  id:number;
  constructor(private movieService:MovieService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params)=>{
        console.log(params.id);
        this.id=params.id;
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
  edit(){
    this.movieService.setMovieEdit(this.movieId);
    this.router.navigate(['/movie',this.id,'edit']);
  }

}
