import { Injectable } from '@angular/core';
import {Movie} from '../model/movie'

@Injectable()
export class MovieService {

  constructor() { }

  movies: Movie[]=[
    {
      title: 'Star Wars',
      overview: 'Star Wars description',
      pictureURL:'https://cdn.dribbble.com/users/588874/screenshots/2249528/dribbble_1x.png'
    },
    {
      title: 'IT',
      overview: 'IT description',
      pictureURL:'http://www.panorama.com.ve/__export/1504655773452/sites/panorama/img/espectaculos/2017/09/05/it.jpg'
    },
    {
      title: 'Justice League',
      overview: 'Justice League description',
      pictureURL:'http://cdn2-www.superherohype.com/assets/uploads/gallery/justice-league/17349762_1337611299666014_1321506846992253218_o.jpg'
    },
    {
      title:"Minions",
      overview:"Minions overview..",
      pictureURL:""
    }
   ];
   
   //new implementation of service with Promise abstraction
   getMovies():Promise<Movie[]>{
    //Peticion http al server
    //el server hace consultas a una BD
    //se procesan los datos obtenidos
    //retorna el set de datos para el cliente  
   // return Promise.resolve(this.movies);
   
     return Promise.reject({error:'Error de conexion con la BD'});

   }
  

}
