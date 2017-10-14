import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movie';
import { MovieService} from '../shared/services/movie.service';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  defaultPictureURL = 'https://image.flaticon.com/icons/png/128/83/83519.png';
  title = 'Popular Movies';
  movies: Movie[];
  // Dependency Injection
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
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
