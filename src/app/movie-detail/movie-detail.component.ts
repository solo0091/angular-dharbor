import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MovieService } from '../share/services/movie.service';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../share/model/movie';
import 'rxjs/Rx';

@Component({
  selector: 'adh-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;
  idParam: Observable<number>;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.movie = new Movie('', '', '', new Date(), '', '', 0);
    this.idParam = this.route.params.map( param => +param.id);
    this.idParam
    .flatMap((id: number) => {
      return this.movieService.getMovieDetail(id);
    })
    .subscribe((response: Movie) => {
      console.log('movie::', response);
      this.movie.title = response['original_title'];
      this.movie.description = response['overview'];
      this.movie.path = this.movieService.getPictureUrl(response['backdrop_path']);
      this.movie.genre = this.concatGenres(response['genres']);
      this.movie.updated = new Date(response['release_date']);
      this.movie.price = response['popularity'];
      this.movie.duration = response['runtime'];
      this.movie.defaulPicturetURL = this.movieService.getDefaultPictureURL('');
    });
    /*this.route.paramMap.subscribe( element => {
      this.movieService.getMovieDetail(+element['params'].id)
      .subscribe((data: any) => {
        this.movie = data;
      });
    });*/
  }
  concatGenres( genres: Array<Object>): string {
    let concatGenre = '';
    genres.forEach((genre, index) => {
      (index === 0 ) ? concatGenre = genre['name'] : concatGenre = concatGenre + '-' + genre['name'];
    });
    return concatGenre;
  }
}
