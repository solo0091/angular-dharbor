import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  listas: string[];

  constructor() {
    this.listas = ['Lista 1', 'Lista 2', 'Lista 3', 'lista 4', 'Lista 5'];
  }

  ngOnInit() {
  }

}
