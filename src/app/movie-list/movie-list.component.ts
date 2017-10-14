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
  public movies: Movie[] = [
    {
      pictureURL: '../assets/img/sw.png',
      titulo: 'Start Wars',
      overwiew: 'Star Wars description...'
    },
    {
      pictureURL: '../assets/img/sin-imagen.jpg',
      titulo: 'Shrek',
      overwiew: 'sherk description...'
    },
    {
      pictureURL: '../assets/img/sin-imagen.jpg',
      titulo: 'IT',
      overwiew: 'IT description...'
    }
  ]
 
  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
 
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.movies = [
        { pictureURL: '../assets/img/sw.png',
        titulo: 'Start Wars',
        overwiew: 'Star Wars description...'}
      ]

      this.title = 'Bit Formulario';
    }, 3000);
  }

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}
