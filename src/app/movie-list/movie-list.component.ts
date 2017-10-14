import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title:string='popular movies';
  movie1 ={
    title:'Start Wars', overview: 'description'
  };
  movie2 ={
    title:'It', overview: 'description'
  };
  movie3 ={
    title:'Justice League', overview: 'description'
  };
  
  
  constructor() { }
  getTitle(){
    return this.title;
  }

  ngOnInit() {
  }

}
