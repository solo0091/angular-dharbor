import { Component, OnInit } from '@angular/core';
import { Movie } from "../shared/model/movie";
import { MovieService } from "../shared/services/movie.service";

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title : string ='Popular Movies';
  defaultpictureURL: string ='https://angular.io/assets/images/logos/angular/angular.png';
  movies: Movie[] ;



  //VARIABLES JASON
  /*
  movie1 : Movie ={
    title: 'Star Wars',
    overview: 'Star Wars Description...',
    pictureURL: 'https://cdn.dribbble.com/users/588874/screenshots/2291915/dribbble_1x.png'
  };
  movie2 : Movie={
    title: 'IT',
    overview:'IT Description...',
    pictureURL: 'https://img.cinemablend.com/filter:scale/quill/e/1/0/3/e/e/e103ee82b2d6307e4d881c75942ff473e08eb0e0.jpg?mw=600'
  };

  movie3 : Movie ={
    title: 'Liga de la justicia',
    overview: 'Liga de la justicia descripcion...',
    pictureURL: 'http://s3-eu-west-1.amazonaws.com/cinemania-cdn/wp-content/uploads/2017/01/11145412/Justice-League-660x374.png'
  };*/
  

 //text:string ='Hola Mundo';


  constructor(private movieService: MovieService) { 

  }

  ngOnInit() {
    
      //this.movies=this.movieService.getMovies();
      console.log('antes de llamar al servicio');
      this.movieService.getMovies().then((result)=>{ //Se crea una funcion para obtener el result
        console.log('Tengo resultado');
        this.movies = result;
      }).catch((error) =>{
        console.log('error', error.message);
      });
      console.log('Despues de movieService.getMovie()');
      //Llamadas a otros servicios
    
   
    
  }

}
