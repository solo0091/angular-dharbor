import { Injectable } from '@angular/core';
import { Movie }   from '../model/movie';

@Injectable()

export class MovieService {
  
movies:Movie[]=[   
   {
    title: 'Star war',
    overview : 'star ward description',
    pictureURL: 'https://cdn.dribbble.com/users/588874/screenshots/2249528/dribbble_1x.png',
  },
 
 {
     title : 'it',
    overview : 'it description..',
     pictureURL:'https://img.europapress.es/fotoweb/fotonoticia_20170705143655_640.jpg',
   },

   {
     title : 'justic ede la liga',
     overview : 'it description..',
     pictureURL:'https://upload.wikimedia.org/wikipedia/en/b/b0/Avatar-Teaser-Poster.jpg',
   },
    {
     title : 'mimius',
     overview : 'it description..',
     pictureURL: null,
   }

 ];

  constructor() { }
  getMovies():Movie[]{
   return this.movies;

  }

}
