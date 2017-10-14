import { Injectable } from '@angular/core';
import {  Movie } from "../model/movie";
@Injectable()
export class MovieService {
  movie:Movie[]=[
    {
      title:'Star Wars',
      overview:"Star Wars description",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-aJpCngIDEQXqxhB8EgI6OOOmJcbqly4Ko1loJA3EIAPjZWu"
    },
    {
      title:'Star Wars2',
      overview:"Star Wars description2",
      image:"https://images-na.ssl-images-amazon.com/images/I/51BGV8AJ4RL.jpg"
    }
  ];
  constructor() { }
  getMovies():Movie[]{
    return this.movie;
  }
}
