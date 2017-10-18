import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';

@Injectable()
export class MovieService {

  movies:Movie[] = [
    {
      title: 'Star Wars',
      overview: 'Star Wars description...',
      pictureURL: 'https://media.contentapi.ea.com/content/legacy/starwars-ea-com/es_MX/starwars/battlefront/news-articles/collect-iconic-heroes-and-dominate-the-universe-in-star-wars-gal/_jcr_content/featuredImage/renditions/rendition1.img.jpg'
    },

    {
      title: 'IT',
      overview: 'IT description...',
      pictureURL: 'http://blog.disfraceshalloweenmimo.com/wp-content/uploads/2017/05/itportada.jpg'
    },

    {
      title: 'Justice League',
      overview: 'Justice League description...',
      pictureURL: 'http://media.comicbook.com/2017/02/justice-league-blur-effect-229823.jpg'
    },

    {
      title: 'Justice League',
      overview: 'Justice League description...',
      pictureURL: null
    }
  ];
  
  constructor() { }

  getMovies(): Promise<Movie[]>{
    //Peticion HTTP al server
    //El server hace consultas a una BD
    
    // return Promise.reject({
    //   message: 'Error de conexion con la BD'
    // });
    
    //Se procesan los datos obtenidos
    //Retorna el set de datos para el cliente
    return Promise.resolve(this.movies)
  }
}
