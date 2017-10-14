import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movie';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public titulo: string = 'Lista de peliculas';
  public title:string = 'Formulario';
  public text = {nombre:'luis', numero:'439564'};
  public clickMessage:string; 

  
  movie1:Movie = {
    pictureURL: '../assets/img/sw.png',
    titulo: 'Start Wars',
    overwiew: 'Star Wars description...'
  };

  movie2:Movie = {
    pictureURL: '../assets/img/sin-imagen.jpg',
    titulo: 'Shrek',
    overwiew: 'sherk description...'
  };

  movie3:Movie = {
    pictureURL: '../assets/img/sin-imagen.jpg',
    titulo: 'IT',
    overwiew: 'IT description...'
  };

  constructor() {
  
   }

  ngOnInit() {

    setTimeout(() => {
      this.movie1 = {
        pictureURL: '../assets/img/sw.png',
        titulo: 'Start Wars II',
        overwiew: 'Part II of the movie...'
      }
      this.title = 'Bit Formulario'
    }, 2000);
  }

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}
