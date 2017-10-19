import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { MovieService } from 'app/shared/services/movie.service';
import { Movie } from 'app/shared/model/movie';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'adh-movie-datail',
  templateUrl: './movie-datail.component.html',
  styleUrls: ['./movie-datail.component.css']
})
export class MovieDatailComponent implements OnInit {
  //@Input()
  movieDetails:Observable<Movie>;
  //movieDetails:Movie;

  //inyeccion del servicio movie
  constructor(private activateRouter: ActivatedRoute,
    private router: Router,
    private movieService: MovieService) { }

  ngOnInit() {

    this.activateRouter.paramMap.subscribe((params)=>{
      this.movieService.getMovieDetail(+params.get('id')).subscribe((data) =>{
        this.movieDetails=data.results;
      });
    });
   /*  this.movieService.getMovies()
      .subscribe((data) =>{
        console.log('data',data);
        this.movies=data.results;
      })
     */
     
  }


}
