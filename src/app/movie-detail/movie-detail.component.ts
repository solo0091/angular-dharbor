import { Component, OnInit, Input } from '@angular/core';
import { Movie } from "../shared/model/movie";
import { MovieService } from "../shared/services/movie.service";

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'adh-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  
 movieDetails:Movie={}; //se define como vacios

id:number;

///Inyeccion del MovieService
  constructor( private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService) { }

  ngOnInit() {

      //SIEMPRE QUE DEVUELVE UN OBSERVABLE, HAY QUE SUSCRIBIRSE;

      ///MANERA DANIEL
      /*
      this.route.paramMap.subscribe((params)=>{
        //this.id=+params.get('id');
        this.moviceService.getMovieDetail(+params.get('id')).subscribe((data)=>{
          console.log('data',data);
        this.movieDetails=data;
      });
      });*/

     ///MANERA LUIS
     this.route.params.subscribe(params=>{
       console.log('params',params);
       this.movieService.getMovieDetail(params.id).subscribe((movie:Movie)=>{
         this.movieDetails=movie;
       });
     });
   
  }



}
