import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

const MOVIES_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';
const MOVIE_DETAIL_API = 'https://api.themoviedb.org/3/movie';
const API_KEY = '0971ed323ba8081b990144eef9e02ace';
const PICTURE_URL = 'https://image.tmdb.org/t/p/w160';
const DEFAULT_PICTURE_URL = 'https://www.w3schools.com/angular/pic_angular.jpg';

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
  
  constructor(private httpClient: HttpClient, route: ActivatedRoute) { }  

  //getMovies(): Promise<Movie[]>{
  getMovies(): Observable<any>{
    //Peticion HTTP al server
    //El server hace consultas a una BD
    
    // return Promise.reject({
    //   message: 'Error de conexion con la BD'
    // });
    
    //Se procesan los datos obtenidos
    //Retorna el set de datos para el cliente
    //return Promise.resolve(this.movies)
    return this.httpClient.get(`${ MOVIES_API }&api_key=${ API_KEY }`);
    
    // console.log(this.resultados);
  }

  getMovie(id_movie:number): Observable<any>{
    return this.httpClient.get(`${ MOVIE_DETAIL_API }/${id_movie}?api_key=${ API_KEY }`);   
  }

  //Esta siendo utilizado en movie-edit-component.ts
  // updateMovie(movie: Movie): Observable<any>{
  //   //body/payload = Movie object
  //   return this.httpClient.post(URL, movie);
  // }
  
  getPictureURL(posterPath:string): string{
    if(!posterPath){
      return undefined;
    }
    return `${PICTURE_URL}${posterPath}`;
  };

  getDefaultPictureURL(): string{
    return DEFAULT_PICTURE_URL;
  };


  
  

}
