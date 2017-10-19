import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movie';
import { MovieService} from '../shared/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title = 'Popular Movies';
  movies: Movie[];
  // Dependency Injection
  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data.results;
    });
    // this.movies = this.movieService.getMovies();
    /*
    console.log('Antes de llamar al servicio');
    this.movieService.getMovies().then((result) => {
      this.movies = result;
      console.log('Tengo el resultado');
    }).catch((error) => {
      console.log('error', error.message);
    });
    console.log('Despues de llamar al servicio');
    */
    /*
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
    */
  }

  onSelect(event: Movie) {
    console.log('Selected', event);
    this.router.navigate(['movie', event['id']]);
  }

  onClick(event: any) {
    console.log('Click', event);
  }

}
