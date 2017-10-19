import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private movieService:MovieService, private router:Router)
  {
   
  }
 
  movies: Movie[];

  ngOnInit() {
    
    this.movieService.getMovies().subscribe((data)=>{
      console.log('data',data);
      this.movies = data.results;})
  }

  onSelect(event: Movie){
    console.log("selected",event);
    this.router.navigate(['movie',event.id])
  }

  onClick(event:MouseEvent){
    console.log("click",event);
  }

   getTitle():string{
     return this.title;
   }
}

interface ItemsResponse {
  results: string[];
}
   