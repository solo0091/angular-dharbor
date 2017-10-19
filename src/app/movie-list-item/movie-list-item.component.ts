import { Component, Input ,OnInit , EventEmitter, Output} from '@angular/core';
import { Movie } from "../shared/model/movie";///se importa la estructura movie del componente
import { MovieService } from 'app/shared/services/movie.service';

@Component({
  selector: 'adh-movie-list-item',//dice como se puede ir manejando , esto representa una sola
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {

  //tenemos q indicar que es un parametro de entrada con el decorador @Input(); Angular se ocupa de asignarle un objeto poniendo el decorador @Input()
  @Input()
  movie : Movie;

  @Output()//sirve para mandar algo hacia el padre
  select: EventEmitter<any> = new EventEmitter<any>();//Este select pueda propagar un evento hasta el padre

  defaultPictureURL: string;

  //Inyectar MovieServices
  constructor(private movieService:MovieService) { }

  ////El componente tiene q ser lo mas ligero posible
  ngOnInit() {

    //delete this.movie['poster_path'];
    //this.movie['poster_path']=null;

    this.movie.pictureURL= this.movieService.getPictureURL(this.movie['poster_path']);//CON LOS CORCHETES SE PUEDE ACCEDER AL ATRIBUTO POSTER_PATH QUE SE TIENE EN HTTML
    
    if(!this.movie['poster_path']){
      this.defaultPictureURL= this.movieService.getDefaultPictureURL();
    }
  }

  onClick():void{
  
    this.select.emit(this.movie);//Propaga o emite un evento, objeto, etc//El componente padre tiene toda la informacion de todo el evento

  }
}
