import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute, Route, ParamMap} from "@angular/router";
import {MovieService  } from "../shared/services/movie.service";
import { Movie } from '../shared/model/movie';

@Component({
  selector: 'adh-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;
  movieId:any;

  @Input()
  
  //propague evento
  @Output()
  select: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router:Router, 
              private aroute: ActivatedRoute, 
              private movieService:MovieService) { }

  ngOnInit() {
    this.movieId=this.aroute.snapshot.paramMap.get('id');
    console.log();
    this.movieService.getDetailMovieId(this.movieId)
    .subscribe((data)=> {
      console.log('data', data);
      this.movie = data;
      this.movie.pictureURL=this.movieService.getPictureURL(this.movie['backdrop_path']);
    })
  }

  onEdit(){
    //console.log('click en edit');
    this.select.emit(this.movie);
    this.router.navigate(['/movie/'+ this.movie['id']+'/edit']);
  }

}
