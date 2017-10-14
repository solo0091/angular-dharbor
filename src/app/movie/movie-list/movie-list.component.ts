import { Component, OnInit } from '@angular/core';
import { Movie } from '../../shared/model/movie'

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title: string = 'Popular Movies';
  movie1: Movie = {
    title: 'Geostorm',
    overview: 'Geostorm description..',
    pictureURL: 'http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2017/08/geostorm_lead.jpg?itok=mCUhAmx8'
  };
  movie2: Movie = {
    title: 'IT',
    overview: 'IT description...',
    pictureURL: 'http://s3.amazonaws.com/www.tomatazos.com/public/uploads/images/156296_1140x516.jpg'
  };
  movie3: Movie = {
    title: 'Justice League',
    overview: 'Justice League description...',
    pictureURL: 'http://nerdist.com/wp-content/uploads/2017/03/justice-league-movie-team-photo-1200x630.jpg'
  };
  
  constructor() { }

  ngOnInit() {
  }
}