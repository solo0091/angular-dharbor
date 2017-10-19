import { Component, OnInit } from '@angular/core';
import { Movie } from "../shared/model/movie";
import { MovieService } from "../shared/services/movie.service";
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router'; //IMPORTAMOS ESTA MATERIAL PARA REDIRECCIONAR UNA URL


@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title : string ='Popular Movies';
  //defaultpictureURL: string ='https://angular.io/assets/images/logos/angular/angular.png';
  movies: Movie[] ; //contiene todas las peliculas

  selectMovie: Movie;

  results: string[];//variable que me va otener los resultados
  

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

/*MANEJO DE PROMISE 
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
        
  }*/

   // Inject HttpClient into your component or service.
  // constructor(private http: HttpClient) {}
   
  constructor(private movieService: MovieService, private router: Router){

  }
    ngOnInit(): void {
      // Make the HTTP request:
     /* this.http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0971ed323ba8081b990144eef9e02ace').subscribe(data => {
        // Read the result field from the JSON response.
        this.results = data['results'];
        this.movies =  data['results'];
        //console.log(this.results);
      });*/
      this.movieService.getMovies()
      .subscribe((data) =>{
        console.log('data',data);
        this.movies=data.results;
      })

    }
    OnSelect(event : Movie){
      this.selectMovie=event;
      //console.log('Selected', event);
      this.router.navigate(['movie', event.id]);
    }

    onClick():void{//Se va ir al detalle de las peliculas
      console.log('click', event);
      //this.router.navigate(['/movie', this.selectMovie['id']]);
      
    }

}
