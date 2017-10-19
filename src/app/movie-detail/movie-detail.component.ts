import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "../shared/services/movie.service";

@Component({
  selector: 'adh-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(private movieService: MovieService, 
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data)=>{
      console.log(data);
      console.log(data['id']);
      this.movieService.getMovie(data['id'])
      .subscribe(info => {
        console.log(info);
        //this.movie = data.results;
      })
    });
  }

}
