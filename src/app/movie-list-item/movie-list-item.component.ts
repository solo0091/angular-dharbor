import { Component, OnInit, Input, EventEmitter, Output ,} from '@angular/core';
import { Movie } from "../shared/model/movie";
import { MovieService } from "../shared/services/movie.service";




@Component({
  selector: 'adh-movie-list-item', ///SE USA PARA FILTRAR ITEM POR ITEM
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {
//Tenemos un parametro de entrada, input parameter, que viene del componente padre, movie-list
@Input() //Decorador para que la variable sea importada con el objeto que requerimos
movie:Movie;

//Output Event
@Output()
select: EventEmitter<any>=new EventEmitter<any>();///funcion que permite comunicar eventos hacia afuera

defaultPictureURL:string;


  ///Inyectamos la dependencia MovieService, Router,ActivatedRoute
  constructor(private movieService:MovieService )
   { }

  ngOnInit() {

    //delete this.movie['poster_path'];///Para eliminar un atributo de un objeto json

    //Agregamos un atributo al objeto, y construimos la URL de la imagen
    ///Llamamos a la funcion getpicture del servicio para poder obtener el path completo
    this.movie.pictureURL=this.movieService.getPictureURL(this.movie['poster_path']);//movie al hacer un obj json, se puede buscar su atributo poster_path de esta forma

    if (!this.movie['poster_path']) {
      this.defaultPictureURL=this.movieService.getDefaultPictureURL();
      
    }
  }

  ///funcion click items
  onClick():void{
    ///con la funcion select.emit, emitir evento,objeto,etc. Para el caso mandamos el objeto movie al Padre (movie-list)
    this.select.emit(this.movie)
//    this.router.navigate()
  }

}
