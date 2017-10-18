import { Component, Input ,OnInit } from '@angular/core';
import { Movie } from "../shared/model/movie";///se importa la estructura movie del componente
import { MovieService } from 'app/shared/services/movie.service';

@Component({
  selector: 'adh-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {

  //tenemos q indicar que es un parametro de entrada con el decorador @Input(); Angular se ocupa de asignarle un objeto poniendo el decorador @Input()
  @Input()
  movie : Movie;

  //Inyectar MovieServices
  constructor(private movieService:MovieService) { }

  ////El componente tiene q ser lo mas ligero posible
  ngOnInit() {
    this.movie.pictureURL= this.movieService.getPictureURL(this.movie['poster_path']);//CON LOS CORCHETES SE PUEDE ACCEDER AL ATRIBUTO POSTER_PATH QUE SE TIENE EN HTTML
  }

}
