import { Component, OnInit } from '@angular/core';
import {Movie} from '../shared/model/movie'
import {MovieService} from '../shared/services/movie.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title: string = 'Popular Movies'
    
  
  //DI
  constructor(private movieService:MovieService)
  {

  }
 
  movies: Movie[];

  ngOnInit() {
    
    this.movieService.getMovies().subscribe((data)=>{
      console.log('data',data);
      this.movies = data.results;})
  }

   getTitle():string{
     return this.title;
   }
}

interface ItemsResponse {
  results: string[];
}
   