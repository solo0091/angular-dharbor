import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movie';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title = 'Popular Movies';
  movies: Movie[] = [
    {
      title: 'Star Wars',
      overview: 'Star Wars description...',
      pictureURL: 'http://cdn.images.express.co.uk/img/dynamic/galleries/64x64/246485.jpg'
    },
    {
      title: 'IT',
      overview: 'IT description...',
      pictureURL: 'http://i.ebayimg.com/images/g/Xd8AAOSwlf5ZwsfS/s-l64.jpg'
    },
    {
      title: 'Justice League',
      overview: 'Justice League description...',
      pictureURL: 'http://cdn.images.express.co.uk/img/dynamic/galleries/64x64/228887.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.movies.push(
        {
          title: 'Mad Max',
          overview: 'Mad Max description...',
          pictureURL: 'https://images.moviepilot.com/image/upload/c_fill,h_64,q_auto,w_64/yakwy8yof6jj6zzewi6p.jpg'
        }
      );
    }, 2000);
    setTimeout(() => {
      this.movies.push(
        {
          title: 'Matrix',
          overview: 'Matrix description...',
          pictureURL: 'https://images.moviepilot.com/image/upload/c_fill,h_64,q_auto,w_64/f0wakuyix5vca2yyh2oj.jpg'
        }
      );
    }, 4000);
  }

}
