import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title: string = 'helle world,hola  mundo'

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
      setTimeout(()=> {
        this.movie1.title="Star Wars II",
        this.movie1.overview="Corre tras 2 segundos";        
      },  8000);

      setTimeout(()=> {
        this.movie1.title="Star Wars III",
        this.movie1.overview="upps  me adelante en la pelicula";        
      },  4000);

  }

  getTitle(): string {
    return this.title;
  }


}
