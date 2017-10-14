import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title : string ='Popular Movies';
  movie1 ={
    title: 'Star Wars',
    overview: 'Star Wars Description...'
  };
  movie2 ={
    title: 'IT',
    overview:'IT Description...'
  };
  movie3 ={
    title: 'Liga de la justicia',
    overview: 'Liga de la justicia descripcion...'
  };


  constructor() { }

  ngOnInit() {
  }

}
