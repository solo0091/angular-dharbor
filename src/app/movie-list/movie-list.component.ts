import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title : string  = ' popular movies';
  movie1={
    title: 'Star war',
    overview : 'star ward description'
  };
   movie2={
     title : 'it',
    overview : 'it description..'
   };

   movie3={
     title : 'justic ede la liga',
     overview : 'it description..'
   };

  constructor() { }

  ngOnInit() {
  }
  //getTitle : string(){
  //  return title;
  }


