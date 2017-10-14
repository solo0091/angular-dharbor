import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
title: string='Peliclas';
movie1 ={ 
  title: 'start ',
  overview: 'descripcion'

}



  constructor() { }

  ngOnInit() {
  }

}
