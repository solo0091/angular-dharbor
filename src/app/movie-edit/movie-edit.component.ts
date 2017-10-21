import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Movie } from '../shared/model/movie';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MovieService } from '../shared/services/movie.service';
import { NgModel, NgForm } from '@angular/forms';


@Component({
  selector: 'adh-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  @Input()
  movie: Movie= {};

  @Output()
  select: EventEmitter<any> = new EventEmitter<any>() ;

  movieID: any;
  constructor(private aroute: ActivatedRoute, private router: Router, private movieService: MovieService) { }

  ngOnInit() {
    this.aroute.params.subscribe((params) => {
     this.movieID  = params['id'];
     console.log("params", params['id']);
     this.movieService.getDetailMovie(this.movieID).subscribe((data) => {
       //this.movie  = data;
       //this.movie.pictureURL = this.movieService.getPictureURL(this.movie['backdrop_path']);
         console.log('movie', this.movie );
         console.log('movie', this.movie['backdrop_path'] );
      });
   });
     // tb devuelve la
     // this.movieID = this.aroute.snapshot.paramMap.get('id');
    // this.movie.pictureURL = this.movieService.getPictureURL(this.movie['backdrop_path']);
 }

}
