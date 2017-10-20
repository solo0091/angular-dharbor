import { Component, OnInit } from '@angular/core';
import { MovieService } from '../share/services/movie.service';
import { ActivatedRoute, ParamMap, RouterLink, Router } from '@angular/router';
import { Movie } from '../share/model/movie';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'adh-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  movie: Movie;
  idParam: Observable<number>;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('movie-edit');
    this.movie = new Movie('', '', '', new Date(), '', '', 0);
    this.idParam = this.route.params.map( param => +param.id);
    this.idParam
    .flatMap((id: number) => {
      return this.movieService.getMovieDetail(id);
    })
    .subscribe((response: Movie) => {
      this.movie.id = response['id'];
      console.log('movie::', response);
      this.movie.title = response['original_title'];
      this.movie.description = response['overview'];
      this.movie.path = this.movieService.getPictureUrl(response['backdrop_path']);
      this.movie.updated = new Date(response['release_date']);
      this.movie.price = response['popularity'];
      this.movie.duration = response['runtime'];
      this.movie.defaulPicturetURL = this.movieService.getDefaultPictureURL('');
      this.movie['fixedTitle'] = this.movie['title'];
    });
  }

}
