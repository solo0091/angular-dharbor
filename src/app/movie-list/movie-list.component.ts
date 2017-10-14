import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title = 'Popular Movies';
  movie1 = {
    title: 'Star Wars',
    overview: 'Star Wars description...',
    icon: 'http://cdn.images.express.co.uk/img/dynamic/galleries/64x64/246485.jpg'
  };
  movie2 = {
    title: 'IT',
    overview: 'IT description...',
    icon: 'http://i.ebayimg.com/images/g/Xd8AAOSwlf5ZwsfS/s-l64.jpg'
  };
  movie3 = {
    title: 'Justice League',
    overview: 'Justice League description...',
    icon: 'http://cdn.images.express.co.uk/img/dynamic/galleries/64x64/228887.jpg'
  };
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.movie1 = {
        title: 'Star Wars II',
        overview: 'Star Wars II description...',
        icon: 'http://cdn.images.express.co.uk/img/dynamic/galleries/64x64/246485.jpg'
      }
    }, 2000);
  }

}
