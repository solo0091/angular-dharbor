import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';

@Injectable()
export class MovieService {

  movies: Movie[] = [
    {
      title: 'Star Wars',
      overview: 'Star Wars description...',
      pictureURL: 'https://cdn.dribbble.com/users/588874/screenshots/2249528/dribbble_1x.png'
    },
    {
      title: 'IT',
      overview: 'IT description...',
      pictureURL: 'https://i.ytimg.com/vi/QW7jpXrI_aY/maxresdefault.jpg'
    },
    {
      title: 'Justice League',
      overview: 'Justice League description',
      pictureURL: 'https://img.cinemablend.com/quill/e/4/9/8/7/7/e4987751f9b900b2988cefcc196417bd6fab8468.jpg'
    },
    {
      title: 'Minions',
      overview: 'Minions overview...',
      pictureURL: null
    }
  ];

  constructor() { }

  getMovies(): Movie[] {
    return this.movies;
  }

}
