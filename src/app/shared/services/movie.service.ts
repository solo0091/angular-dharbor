import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';

@Injectable()
export class MovieService {

  movies: Movie[] = [
    {
      title: 'Star Wars',
      overview: 'Star Wars description...',
      pictureURL: 'http://cdn.images.express.co.uk/img/dynamic/galleries/64x64/246485.jpg'
    },
    {
      title: 'IT',
      overview: 'IT description...',
      pictureURL: 'http://i.ebayimg.com/images/g/Xd8AAOSwlf5ZwsfS/s-l64.jpg'
    },
    {
      title: 'Justice League',
      overview: 'Justice League description...',
      pictureURL: 'http://cdn.images.express.co.uk/img/dynamic/galleries/64x64/228887.jpg'
    },
    {
      title: 'Minions',
      overview: 'Minions description',
      pictureURL: null
    }
  ];
  constructor() { }

  getMovies(): Promise<Movie[]> {
    // Simulando una peticion HTTP
    // El server hace consulta a una base de datos
    // return Promise.reject({
    //   message: 'Error de conexion con la base de datos.'
    // });
    // Se procesa los datos obtenidos
    // Retorna el set de datos para el cliente
    return Promise.resolve(this.movies);
  }

}
