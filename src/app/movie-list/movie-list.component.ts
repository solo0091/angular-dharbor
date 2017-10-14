import { Component, OnInit } from '@angular/core';
import { Movie } from '../share/model/movie';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title = 'Popular movies';
  text = 'text1';
  clickMessage = '';

  movie1: Movie = {
    title: 'Star Wars',
    overview: 'Starwars description....',
    pictureURL: 'https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=461%2C0%2C864%2C864'
  };
  movie2: Movie = {
    title: 'IT',
    overview: 'It description...',
    pictureURL: 'http://cdn.movieweb.com/img.news.tops/NECITK8IikJKGH_1_b/It-Movie-2017-Runtime-Stephen-King.jpg'
  };
  movie3: Movie = {
    title: 'Justice League',
    overview: 'Justice League descriptions...',
    pictureURL: 'https://i.pinimg.com/236x/8d/72/44/8d724422f976e1342af3aafc12dd8598.jpg'
  };
  constructor() { }
// se ejecuta cada vez que se ejecuta el componente
  ngOnInit() {
  }///
  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }


}
