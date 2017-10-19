import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Movie } from "../../shared/model/movie";
import { MovieService } from "../../shared/services/movie.service";

@Component({
  selector: 'adh-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {
  @Input() 
  mov:Movie;
  noimage:string;

  @Output()
  clickItem:EventEmitter<any>=new EventEmitter<any>();

  constructor(private movieService:MovieService) { }

  ngOnInit() {
   // delete this.mov['poster_path'];
    this.mov.imageUrl=this.movieService.getImageURL(this.mov['poster_path']);
    if(!this.mov.imageUrl){
      this.noimage=this.movieService.getDefaultUrl();
    }
  }
  onClick(){
    this.clickItem.emit(this.mov);
  }

}
