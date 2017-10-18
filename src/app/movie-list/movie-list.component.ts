import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movie'
import { MovieService } from '../shared/services/movie.service'

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title: string = 'Popular Movies';
  defaultPictureURL: string = 'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/033/thumb/egghead-angular-material-course-sq.png'
  text: string = 'Hello World';
  movies : Movie[];
  
  //onClickMe() {
  //  this.clickMessage = 'You are my hero!';
  //}
  
  //Dependency Injection
  constructor(private movieService: MovieService) {

   }

  ngOnInit() {
    //this.movies = this.movieService.getMovies();  
    
    this.movieService.getMovies().then((result)=>{
      this.movies = result;
    }).catch((error)=> {
      console.log('error', error.message);
      //this.message = error.message;
    });
    
    

    //ejemplo de cambio de listas por tiempo

    /*setTimeout(() => {
      this.movies = [
        {
          title: 'Iron Man',
          overview: 'Iron Man description....',
          pictureURL: 'https://www.sideshowtoy.com/photo_902987_thumb.jpg'
        },
        {
          title: 'BattleShip',
          overview: 'Battleship description....',
          pictureURL: 'https://ubistatic19-a.akamaihd.net/ubicomstatic/en-US/global/game-info/Battleship-game_info-Boxart-tablet-560x698-v2_Tablet_259485.jpg'
        },
        {
          title: 'Transformers',
          overview: 'Transformers description',
          pictureURL: 'https://sad.hasbro.com/a9e79c9b34ea183cad07eb995c5f51818b6c9447/0465731939d703d10b45538ff8e0efbb.png'
        }
      ]
    }, 5000);*/

    /*setTimeout(() => { //para demostrar como se auto refresca sin necesidad de F5
      this.movie1 = {
        title: 'Star Waras II',
        overview: 'Part II of the movie...'
      }
      this.text = 'Hello Angular'
    }, 4000);
    setTimeout(() => {
      this.movie2 = {
        title: 'Wonder Woman',
        overview: 'Wonder Woman description...'
      }
    }, 4000);*/
  }
}
