import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title: string ='Popular Movies';
  // text: string  ='Description text'
  movie1 = {
    title: 'Star Wars',
    overview: 'Star Wars description...'
  };

  movie2 = {
    title: 'IT',
    overview: 'IT description...'
  };

  movie3 = {
    title: 'Justice League',
    overview: 'Justice League description...'
  };

  text= {
    title_text : 'Title text',
    description: 'Example description'
  }

  constructor() { }

  ngOnInit() {
    //setTimeout(function() {
    setTimeout(() => {
      this.movie1 ={
        title: 'Start Wars II',
        overview: 'Part II of the movie...'
      }
    }, 2000);

    setTimeout(() => {
      this.movie2 ={
        title: 'Wonder Woman',
        overview: 'Wonder Woman description'
      }
    }, 4000);

    setTimeout(() => {
      this.movie3 ={
        title: 'BraveHeart',
        overview: 'BraveHeart description'
      }
    }, 6000);
  }

  // getTitle(): string{
  //   return this.title;
  // }

}
