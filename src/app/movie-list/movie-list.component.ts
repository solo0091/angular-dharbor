import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title: string = 'Hola mundo'

  movie1 = {
    title: 'Star Wars',
    overview: 'description starwars'
  };
  movie2 = {
    title: 'IT',
    overview: 'description it'
  };

  movie3 = {
    title: 'liga de la justicia',
    overview: 'description liga de la justicia'
  };



  constructor() { }

  ngOnInit() {
  }

  getTitle(): string {
    return this.title;
  }


}
