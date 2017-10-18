import { Injectable } from '@angular/core';
import {  Movie} from '../model/movie';

@Injectable()
export class MovieService {
  movies: Movie[] = [
    {
      title: 'Star Wars',
      overview: 'Starwars description....',
      pictureURL: 'https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=461%2C0%2C864%2C864'
    },
   {
      title: 'IT',
      overview: 'It description...',
      pictureURL: 'http://cdn.movieweb.com/img.news.tops/NECITK8IikJKGH_1_b/It-Movie-2017-Runtime-Stephen-King.jpg'
    },
    {
      title: 'Justice League',
      overview: 'Justice League descriptions...',
      // pictureURL: 'https://i.pinimg.com/236x/8d/72/44/8d724422f976e1342af3aafc12dd8598.jpg'
      pictureURL: null
    }
  ];
  constructor() { }

  getMovies(): Promise<Movie[]> {
    // peticion http al server
    // El server ahce consulta a una BD
    // Se procesan los datos obtenidos
    // Retorna el set de datos para el cliente
    return Promise.resolve(this.movies)

    // return Promise.reject({
    //  message: 'Error de conexion con la BD'
   // });
   
    // return this.movies;
  }


}
