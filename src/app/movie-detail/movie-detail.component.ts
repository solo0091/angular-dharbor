
import { Component, OnInit } from '@angular/core';
import { Movie             } from '../shared/model/movie'
import { MovieService      } from '../shared/services/movie.service';
import { ActivatedRoute, 
         Router            } from '@angular/router';

@Component({
  selector: 'adh-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie     : Movie;
   
  constructor(private router: Router, private movieServie: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(params => {
      console.log('params', params);

      this.movieServie.getMovie(params.id)
      .subscribe((movie: Movie) => {
        this.movie = movie;
      });
    });
  }

  onEdit(movie: Movie): void {
    this.router.navigate(['movie', movie.id, 'edit']);
  }

}
