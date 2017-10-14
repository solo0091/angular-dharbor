import { Component, OnInit } from '@angular/core';
import { Movie }  from '../shared/model/movie';
import { MovieService }  from '../shared/services/movie.service';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
clickMessage = '';
defaultPictureURL='http://www.tivix.com/uploads/blog_pics/square.png';
 movies:Movie[];
 

title2 :string = 'welcome';
text:string  ='rosa';


  title : string  = ' popular movies';
  
  

  constructor(private movieService: MovieService) { }


  ngOnInit() {
this.movies = this.movieService.getMovies();
    /*
   setTimeout(()=>{
     this.movie1 = {
       title: 'Star war 2',
    overview : 'star ward description' 
     }
   },2000);
   

*/  }
/*
 onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
*/


  //getTitle : string(){
  //  return title;
}





