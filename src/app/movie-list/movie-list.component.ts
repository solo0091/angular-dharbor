import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title:string='Popular Movies'; ///aca definimos la variable y esto se recuperara en el archivo .html

  movie1={
    title:'Thor',
    overview:'Esperemos sea buena peli'
  };
  movie2={
    title:'IT',
    overview:'Da miedo'
  };
  movie3={
    title:'Justice League',
    overview:'El mejor es flash'
  };

  constructor() { }

  ngOnInit() {
  }

}
