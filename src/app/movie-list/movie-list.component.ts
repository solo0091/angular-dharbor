import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title:string = 'Popular movies';

  movie1 = {
    title: 'Star Wars',
    overview: 'Starwars description....'
  };
  movie2 = {
    title: 'IT',
    overview: 'It description...'
  };
  movie3 = {
    title: 'Justice League',
    overview: 'Justice League descriptions...'
  };
  constructor() { }

  ngOnInit() {
  }
}
