import { Component, OnInit } from '@angular/core';
import { Movie } from '../share/model/movie';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title = 'Welcome to Movie List';

  movieList: Movie[];

  textfield = {
    text: ''
  };
  customText = 'abc';
  messageButton: string;
  statusButton = false;
  value= '';

  ngOnInit() {
    this.movieList = [
      new Movie('others', 'none', '', new Date()),
      new Movie('others', 'none', '', new Date())
    ];
    //let that = this; //asignamos todo el contexto de la clase

    setTimeout(() => {
      this.movieList = [
        new Movie('Avengers', 'Infinity war part 1', '../../assets/avengersjpg', new Date('1/1/16')),
        new Movie(
          'IT',
          'Yo can fly',
          'http://cine.netknowsl.netdna-cdn.com/cine/wp-content/uploads/2017/03/55-2-600x400.jpg', 
          new Date()
        ),
        new Movie(
          'Justice Leage',
          'All justice heroes',
          'http://cdn.movieweb.com/img.news.tops/NEo9NdNcV7uNrw_1_b/Justice-League-Success-Future-Dc-Movie-Release-Slate.jpg',
          new Date())
      ]
      this.customText = 'One way data-binding';
    }, 2000);

    setTimeout(() => {
      const movie3: Movie = new Movie(
        'Wonder Woman',
        'new description',
        'https://upload.wikimedia.org/wikipedia/en/e/ed/Wonder_Woman_%282017_film%29.jpg',
        new Date('1/1/16'));
      this.movieList.push(movie3);
    }, 4000);
  }
  onShowMessage(): void {
    if (this.statusButton === false ) {
      this.messageButton = 'Hello from movie list button...';
      this.statusButton = true;
    }else {
      this.statusButton = false;
      this.messageButton = '';
    }
  }
  onInputFocus( $event ): void {
    console.log('On focus field:', $event);
  }
  onKeyEvent( $event ): void {
    this.value += $event.target.value + '|';
  }
}
/*
export class MovieListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/
