import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/model/movie';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title:string='popular movies';
  text: string='texto';

  clickMessage:string='toco el boton';

  movie1:Movie ={
    title:'Start Wars', 
    overview: 'description', 
    pictureURL: 'https://st-listas.20minutos.es/images/2013-03/358560/list_640px.jpg?1389462516'
  };
  movie2: Movie ={
    title:'It', 
    overview: 'description',
    pictureURL: 'https://st-listas.20minutos.es/images/2013-03/358560/list_640px.jpg?1389462516'
  };
  movie3: Movie ={
    title:'Justice League', 
    overview: 'description',
    pictureURL: 'https://st-listas.20minutos.es/images/2013-03/358560/list_640px.jpg?1389462516'
  };
  
  
  constructor() { }
  getTitle(){
    return this.title;
  }

  ngOnInit() {
    
  
  }

  onClickMe(){
    this.clickMessage='otra vez tocaste';
  }

}
