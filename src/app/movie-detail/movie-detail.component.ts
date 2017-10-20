import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movie';
import { MovieService } from '../shared/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'adh-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;
  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieService.getMovie(params.id).subscribe(
        (movie: Movie) => {
          this.movie = movie;
        }
      );
    });
  }

  onClick(event: any): void {
    if (this.movie) {
      this.router.navigate(['movie', this.movie.id, 'edit']);
    }
  }

}
