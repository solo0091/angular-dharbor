import { Component, OnInit } from '@angular/core';
import { Movie } from "../shared/model/movie";

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title: string = 'Popular Movies'

  movies: Movie[] = [
    {
      title: 'Star Wars',
      overview: 'Star Wars description',
      pictureUrl: 'http://a.dilcdn.com/bl/wp-content/uploads/sites/6/2017/01/sw-the-last-jedi-tall-1200x630.jpg'
    },{
      title: 'IT',
      overview: 'IT description',
      pictureUrl: 'https://i.ytimg.com/vi/A4PuQCWDcM4/maxresdefault.jpg'
    },{
      title: 'Justice League',
      overview: 'Justice League description',
      pictureUrl: 'https://www.dekora.es/wp-content/uploads/2017/09/231088-DISCO-DE-AZUCAR-16-CM-SUPERMAN-Y-BATMAN-AZF_1-300x300.jpg'
    }
  ];

constructor() { }

ngOnInit() {
}

getTitle(): string {
  return this.title;
}
}
