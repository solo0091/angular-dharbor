import { Component, 
         Input, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movie';

@Component({
  selector: 'adh-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {
  // Input parameter
  @Input()
  movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
