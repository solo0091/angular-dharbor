import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movie';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title: string ='Popular Movies';
  // text: string  ='Description text'
  movie1:Movie = {
    title: 'Star Wars',
    overview: 'Star Wars description...',
    pictureURL: 'https://www.ondafuerteventura.es/la-nueva-entrega-star-wars-se-rodara-fuerteventura/'
  };

  movie2:Movie = {
    title: 'IT',
    overview: 'IT description...',
    pictureURL: 'https://pics.filmaffinity.com/it-787119144-large.jpg'
  };

  movie3:Movie = {
    title: 'Justice League',
    overview: 'Justice League description...',
    pictureURL: 'http://media.comicbook.com/2017/02/justice-league-blur-effect-229823.jpg'
  };

  text= {
    title_text : 'Title text',
    description: 'Example description'
  }

  constructor() { }

  ngOnInit() {
    //setTimeout(function() {
    // setTimeout(() => {
    //   this.movie1 ={
    //     title: 'Start Wars II',
    //     overview: 'Part II of the movie...'
    //   }
    // }, 2000);

    // setTimeout(() => {
    //   this.movie2 ={
    //     title: 'Wonder Woman',
    //     overview: 'Wonder Woman description'
    //   }
    // }, 4000);

    // setTimeout(() => {
    //   this.movie3 ={
    //     title: 'BraveHeart',
    //     overview: 'BraveHeart description'
    //   }
    // }, 6000);
  }

  clickMessage = '';

  onClickMe(){
    this.clickMessage = 'You are me hero';
  }
  // getTitle(): string{
  //   return this.title;
  // }

}
