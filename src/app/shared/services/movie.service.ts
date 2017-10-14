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

  getMovies(): Movie[] {
    return this.movies;
  }

}
