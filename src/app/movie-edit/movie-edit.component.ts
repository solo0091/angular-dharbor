import { Component, OnInit } from '@angular/core';

import { NgModel,NgForm } from "@angular/forms";

import { MovieService } from "../shared/services/movie.service";
import { ActivatedRoute } from '@angular/router';
import { Movie } from "../shared/model/movie";

@Component({
  selector: 'adh-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

movieDetails:Movie={};

  constructor(private movieService:MovieService,
              private route: ActivatedRoute,) 
  { }

  ngOnInit() {

    ///CARGAMOS LOS DATOS DE LA PELICULA QUE QUEREMOS EDITAR
    this.route.params.subscribe(params=>{
      console.log('params',params);
      this.movieService.getMovieDetail(params.id).subscribe((movie:Movie)=>{
        this.movieDetails=movie;

        this.movieDetails['fixedTitle']=this.movieDetails.title;
      });
    });

  }

}
