
import { Component, OnInit } from '@angular/core';
import { Movie             } from '../shared/model/movie';
import { MovieService      } from '../shared/services/movie.service';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  title: string = 'Popular Movies';

  defaultPictureURL: string = 'https://angular.io/assets/images/logos/angular/angular.svg';
  movies: Movie[];

  // llevado a movie.service
  // movies: Movie[] = [
  //   {
  //     title     : 'Star Wars',
  //     overview  : 'Star Wars description..',
  //     pictureURL: 'http://elordenmundial.com/wp-content/uploads/2017/01/starwarsinfive-1449855236991_large.jpg'
  //   },
  //   {
  //     title     : 'IT',
  //     overview  : 'It description..',
  //     pictureURL: 'http://mouse.latercera.com/wp-content/uploads/2017/07/it.jpg'
  //   },
  //   {
  //     title     : 'Injustic Leage',
  //     overview  : 'Injustic Leage description..',
  //     pictureURL: 'https://www.injustice.com/img/share.jpg'    
  //   },
  //   {
  //     title     : 'Minions',
  //     overview  : 'Minions description..',
  //     pictureURL: null    
  //   }
  // ];


  constructor(private movieService: MovieService) {  // si es private le asigana ala variable correspondiente automaticamente
    // this.movieService = movieService; ya no es necesario esto
   }

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
    setTimeout(() => {
      this.movies = this.movieService.getMovies();
    }, 2000);
  }

  /*
   * Una funcion que se puede llamar en la vista
   */
  getTitle(): string {
    return this.title;
  }

}
