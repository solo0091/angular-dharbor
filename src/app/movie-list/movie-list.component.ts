import { Component, OnInit } from '@angular/core';
import {Movie} from '../shared/model/movie'
import {MovieService} from '../shared/services/movie.service'

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title: string = 'Popular Movies'
  defaultPictureURL:string = "http://www.simplek12.com/wp-content/uploads/2015/06/movie_night.jpg"  

  
  //DI
  constructor(private movieService:MovieService)
   {

    }
 
  movies: Movie[];

  ngOnInit() {
    // setTimeout(()=>{
    //   this.movies =this.movies2
    //   },2000);
    
    //this.movies = this.movieService.getMovies();
    
       setTimeout(()=>{
       this.movies =this.movieService.getMovies();
       },2000);

  }
 
  getTitle():string{
    return this.title;
  }
}
