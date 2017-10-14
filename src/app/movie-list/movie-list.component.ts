import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title: string = 'Popular Movies';
  movie1 = {
    title: 'StarWars',
    overview: 'Star Wars description...',
  }
  movie2 = {
    title: 'IT',
    overview: 'IT description...'
  }
  movie3 = {
    title: 'Justice League',
    overview: 'Justice League description..'
  }

  listas: string[];

  constructor() {
    this.listas = ['Lista 1', 'Lista 2', 'Lista 3', 'lista 4', 'Lista 5'];
  }

  ngOnInit() {
  }
}
