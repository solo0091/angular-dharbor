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

  defaultPictureURL:string='https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg';
  
  movies: Movie[]=[

    {
      title:'Start Wars', 
      overview: 'description', 
      pictureURL: 'https://st-listas.20minutos.es/images/2013-03/358560/list_640px.jpg?1389462516'
    },{
      title:'It', 
      overview: 'description',
      pictureURL: 'https://st-listas.20minutos.es/images/2013-03/358560/list_640px.jpg?1389462516'
    },{
      title:'Justice League', 
      overview: 'description',
      pictureURL: 'https://st-listas.20minutos.es/images/2013-03/358560/list_640px.jpg?1389462516'
    },
    {
      title:'minion', 
      overview: 'description4',
      pictureURL: ''
    }

  ];
  
  
  
  constructor() { }
  getTitle(){
    return this.title;
  }

  ngOnInit() {
    setTimeout(function (){
        this.movies=[
          
              {
                title:'peli 1', 
                overview: 'description1', 
                pictureURL: 'https://st-listas.20minutos.es/images/2013-03/358560/list_640px.jpg?1389462516'
              },{
                title:'peli2', 
                overview: 'description2',
                pictureURL: 'https://st-listas.20minutos.es/images/2013-03/358560/list_640px.jpg?1389462516'
              },{
                title:'peli3', 
                overview: 'description3',
                pictureURL: 'https://st-listas.20minutos.es/images/2013-03/358560/list_640px.jpg?1389462516'
              }
          
            ];
    }, 2000);
  
  }

  onClickMe(){
    this.clickMessage='otra vez tocaste';
  }

}
