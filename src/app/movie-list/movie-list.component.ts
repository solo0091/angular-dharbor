import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movie';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title = 'Popular Movies';
  movie1: Movie = {
    title: 'Star Wars',
    overview: 'Star Wars description...',
    pictureURL: 'http://cdn.images.express.co.uk/img/dynamic/galleries/64x64/246485.jpg'
  };
  movie2: Movie = {
    title: 'IT',
    overview: 'IT description...',
    pictureURL: 'http://i.ebayimg.com/images/g/Xd8AAOSwlf5ZwsfS/s-l64.jpg'
  };
  movie3: Movie = {
    title: 'Justice League',
    overview: 'Justice League description...',
    pictureURL: 'http://cdn.images.express.co.uk/img/dynamic/galleries/64x64/228887.jpg'
  };
  constructor() { }

  ngOnInit() {
  }

}
