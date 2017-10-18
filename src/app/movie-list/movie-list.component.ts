import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movie';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title = 'Popular movies';
  text = 'text1';
  clickMessage = '';
  movies: Movie[];
  defaultPictureURl =
'http://img.nordangliaeducation.com/resources/asia/_filecache/25b/3a2/25963-cropped-w220-h240-of-1-FFFFFF-9070-cropped-w220-h240-of-1-ffffff-missing-photo-male.jpg';

 // Dependecy Injection
  constructor(private movieService: MovieService) { }
// se ejecuta cada vez que se ejecuta el componente
  ngOnInit() {
     // this.movies = this.movieService.getMovies();
    // console.log('antes de llamr al servicio');
    // this.movieService.getMovies().then((result) => {
    //   console.log('tengo el resultado');
    //  this.movies = result;
    // }).catch((error) => {
    //    console.log('error', error.message);
    // })
    // console.log('Despues de movie service.getMoview()');
     // Llamada a  otro servicio
     // otro tipo de procesamiento

     // this.movieService.getApiMovies();
    this.movieService.getApiMovies().subscribe((data) => {
      console.log('data', data);
      this.movies = data.results; } );

  }///
  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }


}
