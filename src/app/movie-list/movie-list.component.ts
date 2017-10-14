import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public titulo: string = 'Lista de peliculas';

  movie1 = {
    titulo: 'Start Wars',
    overwiew: 'star wars description...'
  };
  movie2 = {
    titulo: 'Shrek',
    overwiew: 'sherk description...'
  }
  movie3 = {
    titulo: 'IT',
    overwiew: 'IT description...'
  }

  constructor() { }

  ngOnInit() {
  }
}
