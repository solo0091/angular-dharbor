import { Component, OnInit } from '@angular/core';
import { Movie } from "../shared/model/movie";

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title: string = 'Popular Movies'
  defaultPictureUrl = 'https://cdn2.iconfinder.com/data/icons/classic-development-circle/512/multimedia-512.png'

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
    },{
      title: 'Minions',
      overview: 'Minions description',
      pictureUrl: null
    }
  ];

constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.movies.push({
          title: 'Avatar',
          overview: 'Avatar description',
          pictureUrl: 'http://i1.wp.com/www.rafaelvega.com/wp-content/uploads/Avatar-Movie-Soundtrack-2009-300x300.jpg?resize=300%2C300'
        });
      this.movies.push({
        title: 'Impire of the Sun',
        overview: 'Impire of the Sun description',
        pictureUrl: 'http://4.bp.blogspot.com/-QA047u9woyQ/Vlg8gnzSvAI/AAAAAAAAOuI/XEj8fDafKdM/s1600/sol.jpg'
      });
    }, 3000);
  }

getTitle(): string {
  return this.title;
}
}
