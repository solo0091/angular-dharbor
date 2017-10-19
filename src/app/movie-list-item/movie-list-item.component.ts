import { Component,EventEmitter ,Input, OnInit, Output } from '@angular/core';
import { Movie } from '../shared/model/movie';
import { MovieService } from '../shared/services/movie.service'

 
@Component({
  selector: 'adh-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {
  //input parameter
  @Input()
  movie: Movie;
  defaultPictureURL: string;
  
  //Output event
  @Output()
  select: EventEmitter<any> = new EventEmitter<any>();


  //Injectar MovieService
  constructor(private movieService: MovieService){ }
  
  ngOnInit() {
    this.movie.pictureURL = 
    this.movieService.getPictureURL(this.movie['poster_path']);
    
    if(!this.movie['poster_path']) {
      this.defaultPictureURL = this.movieService.getDefaultPictureURL();
    }

  }

  onClick(): void {
    //propagar, emitir evento, objeto, etc.
    this.select.emit(this.movie);
  }

}
