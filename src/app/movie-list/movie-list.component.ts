import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title: string = 'Popular Movies';

  movie1 = {
    title   : 'Star Wars',
    overview: 'Star Wars description..'
  };
  movie2 = {
    title   : 'IT',
    overview: 'It description..'
  };
  movie3 = {
    title   : 'Injustic Leage',
    overview: 'Injustic Leage description..'
  };


  constructor() { }

  ngOnInit() {
  }

  /*
   * Una funcion que se puede llamar en la vista
   */
  getTitle(): string {
    return this.title;
  }

}
