import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MovieService  } from '../shared/services/movie.service';
import { Movie } from '../shared/model/movie';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'adh-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})

//@Input()


export class MovieDetailComponent implements OnInit {

  @Input()
  movie: Movie;

  @Output()
  select: EventEmitter<any> = new EventEmitter<any>() ;

  movieID: any;
  constructor(private movieService: MovieService, private aroute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
     this.aroute.params.subscribe((params) => {
      this.movieID  = params['id'];
      console.log("params", params['id']);
      this.movieService.getDetailMovie(this.movieID).subscribe((data) => {
        this.movie  = data;
        this.movie.pictureURL = this.movieService.getPictureURL(this.movie['backdrop_path']);
          console.log('movie', this.movie );
          console.log('movie', this.movie['backdrop_path'] );
       });
    });
      // tb devuelve la
      // this.movieID = this.aroute.snapshot.paramMap.get('id');
     // this.movie.pictureURL = this.movieService.getPictureURL(this.movie['backdrop_path']);
  }
  onEdit() {
     console.log('Click Edit');
     this.select.emit(this.movie);
      this.router.navigate(['/movie/'+this.movie['id']+'/edit' ]);
   }
}
