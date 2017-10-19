import { Component, Input ,OnInit } from '@angular/core';
import {Movie} from '../shared/model/movie'
import {MovieService} from '../shared/services/movie.service';
@Component({
  selector: 'adh-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {
  //Input parameter, it is used to level attribute
  @Input()
  movie:Movie;
  defaultPictureURL:string;
//Injectar Movieservice
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    //test the picture by default
    //delete this.movie['poster_path'];

    this.movie.pictureURL =  this.movieService.getPictureURL(this.movie['poster_path']);
    if(!this.movie['poster_path']){
      this.defaultPictureURL = this.movieService.getDefaultPictureURL()
    }
  }

}
