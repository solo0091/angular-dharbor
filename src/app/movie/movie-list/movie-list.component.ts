import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title:string="Movie List";
  movie1={
    title:'Star Wars',
    overview:"Star Wars description"
  }
  movie2={
    title:'Star Wars2',
    overview:"Star Wars description2"
  }
  movie=[
    {
      title:'Star Wars',
      overview:"Star Wars description"
    },
    {
      title:'Star Wars2',
      overview:"Star Wars description2"
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  getTitle(){
    return this.title;
  }
}
