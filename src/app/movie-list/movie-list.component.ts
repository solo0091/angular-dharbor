import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movie'

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title: string = 'Popular Movies';

  movies: Movie[] = [
    {
      title: 'Star Wars',
      overview: 'Star Wars description....',
      pictureURL: 'http://comic-cons.xyz/wp-content/uploads/Star-Wars-avatar-icon-Darth-Vader.png'
    },
    {
      title: 'IT',
      overview: 'IT description...',
      pictureURL:'http://www.sopitas.com/wp-content/uploads/2016/07/tim-curry-pennywise-it-pel%C3%ADcula-4-e1468431683235.png'
    },
    {
      title: 'Justice League',
      overview: 'Justice League description ...',
      pictureURL: 'http://previouslyempire.com/wp-content/uploads/2017/10/Justice_League_-_Logo_Signo.png'
    }
  ]

  text: string = 'Hello World';

  clickMessage = '';
  
  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
  
  constructor() { }

  ngOnInit() {
setTimeout(() => {
  this.movies = [
    {
      title: 'Iron Man',
      overview: 'Iron Man description....',
      pictureURL: 'https://www.sideshowtoy.com/photo_902987_thumb.jpg'
    },{
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
}, 5000);

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
