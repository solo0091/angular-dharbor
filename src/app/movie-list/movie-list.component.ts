import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title = 'Welcome to Movie List';

  movieList = [
    {
      title: 'Avengers',
      description: 'Infinity war part 1',
      updated: new Date('1/1/16'),
    },
    {
      title: 'IT',
      description: 'Yo can fly',
      updated: new Date('1/1/16'),
    },
    {
      title: 'Justice Leage',
      description: 'All justice heroes',
      updated: new Date('1/1/16'),
    }
  ];

  textfield = {
    text: ''
  };
  ngOnInit() {
  }

}
/*
export class MovieListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/
