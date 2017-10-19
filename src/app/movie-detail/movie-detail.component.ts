import { Component, OnInit, Input } from '@angular/core';
import { Movie } from "../shared/model/movie";
import { MovieService } from "../shared/services/movie.service";

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'adh-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  
 movieDetails:Movie;

id:number;
sub:any;

///Inyeccion del MovieService
  constructor( private route: ActivatedRoute,
    private router: Router,
    private moviceService: MovieService) { }

  ngOnInit() {

      
      this.route.paramMap.subscribe((params)=>{
        //this.id=+params.get('id');
        this.moviceService.getMovieDetail(+params.get('id')).subscribe((data)=>{
          console.log('data',data);
        this.movieDetails=data.results;
      }
      );
      });

     
      
      
   
  }

}
