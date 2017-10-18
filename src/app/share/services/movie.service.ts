import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

const MOVIES_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=`;
const API_KEY = `0971ed323ba8081b990144eef9e02ace`;

@Injectable()
export class MovieService {
  movies: Movie[] = [
    new Movie(
      'Avengers',
      `Mientras que Los Vengadores y sus aliados continúan protegiendo al mundo
      de largas tiranías, un nuevo peligro emerge de las sombras cósmicas,
      un infame villano intergaláctico llamado Thanos. Su meta es coleccionar
      todas las gemas del infinito, artefactos de un inimaginable poder, para
      usarlos en beneficio propio y alterar el universo entero.`,
      '../../assets/avengersjpg',
      new Date('1/1/16'),
      '1h 30m',
      'Accion',
      60
    ),
    new Movie(
      'IT',
      `Cuando los chicos del pueblo de Derry, Maine, empiezan a desaparecer,
      un grupo de niños pequeños se enfrenta a sus mayores temores al enfrentarse a
      un demoníaco payaso llamado Pennywise, cuya historia de muerte y violencia se remonta
      siglos atrás.`,
      'http://cine.netknowsl.netdna-cdn.com/cine/wp-content/uploads/2017/03/55-2-600x400.jpg',
      new Date(),
      '2h 0m',
      'Terror',
      55
    ),
    new Movie(
      'Justice Leage',
      `Alimentado por su restaurada fe en la humanidad e inspirado por el acto desinteresado
      de Superman, Bruce Wayne recluta la ayuda de su recién encontrada aliada,
      Diana Prince, para enfrentarse a un enemigo aún mayor. Juntos, Batman y Wonder Woman
      trabajan deprisa para encontrar y reclutar un equipo de metahumanos para plantar cara
      a esta nueva amenaza creciente. Pero pese a la formación de esta liga de héroes sin
      precedentes – Batman, Wonder Woman, Aquaman, Cyborg y Flash, quizás sea demasiado tarde
      para salvar el planeta de un asalto de proporciones catastróficas`,
      'http://cdn.movieweb.com/img.news.tops/NEo9NdNcV7uNrw_1_b/Justice-League-Success-Future-Dc-Movie-Release-Slate.jpg',
      new Date(),
      '1h 45m',
      'Accion',
      60
    )
  ];
  blindMovies: Movie[] = [
    new Movie('', '', '', new Date(), '', '', 0),
    new Movie('', '', '', new Date(), '', '', 0)
  ];
  constructor(private http: HttpClient) { }
  getMovies(): Promise<Movie[]> {
    /*
      Peticion HTTP al serve
      El server hace consultas a una DB
      Se procesa los datos obtenidos
      retorna el set de datos para el cliente
    */
    return Promise.resolve(this.movies);
    // return Promise.reject({ message: 'Error de conexion...'})
  }
  getBlindMovies(): Movie[] {
    return this.blindMovies;
  }
  addNewMovie(): Movie[] {
    const movie3: Movie = new Movie(
      'Wonder Woman',
      `Diana es una joven guerrera, hija de Zeus y hermana de Ares,
      criada como princesa guerrera de las amazonas en una isla protegida
      y entrenada para ser una luchadora invencible. Después de que Steve Trevor,
      un piloto estadounidense trabajando como espía para el Reino Unido, se estrelle
      en un avión alemán en el mar cerca de dicha isla, es salvado por la princesa,
      a quien le relata sobre el desarrollo de una guerra mundial, denominada por él como
      la Gran Guerra, que está sucediendo en ese momento. Entonces, Diana sale de su hogar
      para tratar de detener este enfrentamiento y frenar a Ares, el Dios de la Guerra,
      de una vez y para siempre.`,
      // 'https://upload.wikimedia.org/wikipedia/en/e/ed/Wonder_Woman_%282017_film%29.jpg',
      '',
      new Date('1/1/16'),
      '2h 0m',
      'Accion',
      65
    );
    this.movies.push(movie3);
    return this.movies;
  }

  getRESTPrivateURl(): Observable<any> {
    return this.http
    .get(`${ MOVIES_API}&api_key=${API_KEY}`);
  }
}
