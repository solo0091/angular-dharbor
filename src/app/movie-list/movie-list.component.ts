import { Component, OnInit } from '@angular/core';
import { Movie } from "../shared/model/movie";

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title: string = 'Popular Movies';
  movie1: Movie = {
    title: 'StarWars',
    overview: 'Star Wars description...',
    pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png'
  }
  movie2: Movie = {
    title: 'IT',
    overview: 'IT description...',
    pictureURL: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTE0NWEyNDYtYWI5MC00MWY0LTg1NDctZjAwMjkyMWJiNzk1XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }
  movie3: Movie = {
    
    title: 'Justice League',
    overview: 'Justice League description..',
    pictureURL: 'http://www.justiceleaguethemovie.com/img/gallery/img01.jpg'
  }
  
  constructor() {
  }

  ngOnInit() {
  }
}
