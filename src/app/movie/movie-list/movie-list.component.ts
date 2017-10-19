import { Component, OnInit } from '@angular/core';
import { Movie } from '../../shared/model/movie';
import { MovieService } from '../../shared/services/movie.service';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title: string = 'Popular Movies';
  movies: Array<Movie>;

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  bufferValue = 75;
  isLoading = true;


  constructor(private movieService: MovieService) { }

  ngOnInit() {

    this.movieService.getMovies().subscribe((data) => {
      this.movies = data.results;
      this.isLoading = false;
    });

    /*setTimeout(() => {
      //this.movies = this.movieService.getMovies();
      console.log('Antes de llamar al servicio');
      this.movieService.getMovies2().then((result) => {
        console.log('Tengo el resultado');
        this.movies = result;
      }).catch( (error) => {
        console.log(error.message);
      });
      console.log('Despues de llamar al servicio');
    }, 2000)*/

    /*setTimeout(() => {
      this.movies= [
        {
          title: 'La falla de San Andres',
          overview: 'La falla de San Andres description..',
          pictureURL: 'https://i.ytimg.com/vi/K8jAKIJL66c/hqdefault.jpg'
        },
        {
          title: 'Batman el caballero de la noche',
          overview: 'Batman el caballero de la noche description...',
          pictureURL: 'https://www.cinepremiere.com.mx/imgsHistorico/u18/int_trailer_tdkr_.jpg'
        }
      ];
    }, 4000);*/
  }

  onSelect(event: Movie) {
    console.log('Selected', event);
  }

  onClick(event: any) {
    console.log('Click', event);
  }
}
