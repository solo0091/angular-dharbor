import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title: string = 'Popular Movies'
  
    movie1 = {
      title: 'Star Wars',
      overview: 'Star Wars description'
    }
  
    movie2 = {
      title: 'IT',
      overview: 'IT description'
    }
  
    movie3 = {
      title: 'Justice League',
      overview: 'Justice League description'
    }
  
  constructor() { }

  ngOnInit() {
  }
 
  getTitle():string{
    return this.title;
  }
}
