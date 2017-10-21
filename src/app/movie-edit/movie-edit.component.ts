import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgModel, NgForm } from '@angular/forms';
import { MovieService } from '../shared/services/movie.service';
import { Movie } from '../shared/model/movie';

@Component({
  selector: 'adh-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  movie:Movie={};


  constructor(private activateRoute: ActivatedRoute,
              private movieService : MovieService) { }

  ngOnInit() {

    this.activateRoute.params.subscribe(params =>{
      console.log('Params', params);
      this.movieService.getMovie(params.id).subscribe((movie:Movie)=>{
       //No se le asigna el objeto
        //this.movie = movie;

        //se va a clonar para cambiar el titulo a medida q se va editando
        //this.movie['fixedTitle']=this.movie.title;
      });
    });

  }

  onSubmit(){
    this.movieService.updateMovie(this.movie).
    subscribe((result) =>{
      console.log('this.movie', this.movie);
    });
  }

}
