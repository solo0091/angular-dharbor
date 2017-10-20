import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

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
  
  movieDetails:Movie;

  //inyeccion de dependencias
  constructor(private activateRouter: ActivatedRoute,
    private router: Router,
    private movieService: MovieService) { }

  ngOnInit() {
    //FORMA PREBA NO DA 
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
      //VERSIoN CORRECTA
     this.activateRouter.params.subscribe(params =>{
       console.log('Params', params);
       this.movieService.getMovie(params.id).subscribe((movie:Movie)=>{
         this.movieDetails = movie;
       });
     });
     
  }


}
