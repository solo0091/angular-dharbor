import { Component, OnInit } from '@angular/core';
import { Movie } from "../shared/model/movie";

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title: string = 'Popular Movies';
  movies: Movie[] = [
    {
      title: 'StarWars',
      overview: 'Star Wars description...',
      pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png'
    },
    {
      title: 'IT',
      overview: 'IT description...',
      pictureURL: 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTE0NWEyNDYtYWI5MC00MWY0LTg1NDctZjAwMjkyMWJiNzk1XkEyXkFqcGdeQXVyNjk5NDA3OTk@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      
      title: 'Justice League',
      overview: 'Justice League description..',
      pictureURL: 'http://www.justiceleaguethemovie.com/img/gallery/img01.jpg'
    }
  ];
  
  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.movies = [
        {
          title: 'Avenger',
          overview: 'Avenger description...',
          pictureURL: 'http://www.denofgeek.us/sites/denofgeekus/files/7/72/avengers_age_of_ultron_2015_movie-wide.jpg'      
        },
        {
          title: 'El Dictador',
          overview: 'El dictador description..',
          pictureURL: ''
        }
      ]
    }, 3000);
  }
}
