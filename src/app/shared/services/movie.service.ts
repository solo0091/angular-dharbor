import { Injectable } from '@angular/core';
import { Movie } from '../model/movie'

@Injectable()
export class MovieService {

  movies: Array<Movie> = [
    {
      title: 'Geostorm',
      overview: 'Geostorm description..',
      pictureURL: 'http://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/2017/08/geostorm_lead.jpg?itok=mCUhAmx8'
    },
    {
      title: 'IT',
      overview: 'IT description...',
      pictureURL: 'http://s3.amazonaws.com/www.tomatazos.com/public/uploads/images/156296_1140x516.jpg'
    },
    {
      title: 'Justice League',
      overview: 'Justice League description...',
      pictureURL: 'http://nerdist.com/wp-content/uploads/2017/03/justice-league-movie-team-photo-1200x630.jpg'
    },
    {
      title: 'Minioms',
      overview: 'Minioms description',
      pictureURL: null
    }
  ];

  constructor() { }

  getMovies(): Promise<Array<Movie>> {
    //Peticion HTTP al server
    //El server hace consultas a una BD
    //Se procesan los datos obtenidos
    //Retorna el set de datos para el cliente
    return Promise.resolve(this.movies);
    // return Promise.reject({
    //   message: 'Error de conexion con la BD'
    // });
  }
}
