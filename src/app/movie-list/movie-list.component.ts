
import { Component, OnInit } from '@angular/core';
import { Movie } from './../shared/model/movie';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title: string = 'Popular Movies';

  movie1: Movie = {
    title     : 'Star Wars',
    overview  : 'Star Wars description..',
    pictureURL: 'http://elordenmundial.com/wp-content/uploads/2017/01/starwarsinfive-1449855236991_large.jpg'
  };
  movie2: Movie = {
    title     : 'IT',
    overview  : 'It description..',
    pictureURL: 'http://mouse.latercera.com/wp-content/uploads/2017/07/it.jpg'
  };
  movie3: Movie = {
    title     : 'Injustic Leage',
    overview  : 'Injustic Leage description..',
    pictureURL: 'https://www.injustice.com/img/share.jpg'    
  };


  constructor() { }

  ngOnInit() {
    // setTimeout(() => {   // Notacion flecha para acceder al contexto externo
    //   this.movie1 = {    // todas las variables con movie1 se actualizan por la interpolacion {{}}
    //     title   : 'Star Wars II',
    //     overview: 'Star Wars II description..'
    //   }
    // }, 2000);

    // setTimeout(() => {
    //   this.movie2 = {
    //     title   : 'Wonder Woman',
    //     overview: 'Wonder Woman description..'
    //   }
    // }, 4000);
  }

  /*
   * Una funcion que se puede llamar en la vista
   */
  getTitle(): string {
    return this.title;
  }

}
