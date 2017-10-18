import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movie';
import { MoviesService } from '../shared/services/movies.service'


@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title: string = 'helle world,hola  mundo';
  defaultPicture: string = 'https://pluralsight.imgix.net/paths/path-icons/angular-14a0f6532f.png'
  movies: Movie[];
  /* movies:Movie[]=[
    {
      title: 'Star Wars',
      overview: 'description starwars',
      pictureAvatar:'http://niceclipart.com/wp-content/uploads/2017/07/Darth-Vader-clipart-3.jpg'
    }, {
      title: 'IT',
      overview: 'description it',
      pictureAvatar:'http://wtfonline.mx/wp-content/uploads/2017/09/itatuendo.jpg'
  
  
    }, {
      title: 'liga de la justicia',
      overview: 'description liga de la justicia',
      pictureAvatar:'http://sm.ign.com/ign_es/screenshot/default/maxresdefault_efdj.jpg'
    }
    , {
      title: 'Minios',
      overview: 'description de los minions',
      pictureAvatar:''
    }

  ]; */




  /* 
    movie1:Movie = {
      title: 'Star Wars',
      overview: 'description starwars',
      pictureAvatar:'http://niceclipart.com/wp-content/uploads/2017/07/Darth-Vader-clipart-3.jpg'
    };
    movie2:Movie = {
      title: 'IT',
      overview: 'description it',
      pictureAvatar:'https://cdn.dribbble.com/users/588874/screenshots/2249528/dribbble_1x.png'
  
  
    };
  
    movie3:Movie = {
      title: 'liga de la justicia',
      overview: 'description liga de la justicia',
      pictureAvatar:'https://cdn.dribbble.com/users/588874/screenshots/2249528/dribbble_1x.png'
    };
   */


  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    setTimeout(() => {



      //this.movies= this.movieService.getMovies();
    }, 2000);

    this.movieService.getMovies().then((result) => {
      console.log('tengo resultados');
      this.movies = result;

    }).catch((error) => {
      console.log(error.message);
      //this.message= error.message;
    });


    /* setTimeout(()=> {
      this.movie1.title="Star Wars II",
      this.movie1.overview="Corre tras 2 segundos";        
    },  8000);

    setTimeout(()=> {
      this.movie1.title="Star Wars III",
      this.movie1.overview="upps  me adelante en la pelicula";        
    },  4000); */

  }

  getTitle(): string {
    return this.title;
  }


}
