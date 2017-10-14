import { Component, OnInit } from '@angular/core';
import {  Movie } from "../shared/model/movie";

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title:string='Popular Movies'; ///aca definimos la variable y esto se recuperara en el archivo .html

  movies:Movie[]=[{
    title:'Thor',
    overview:'Esperemos sea buena peli',
    pictureURL:'http://huellalince.com/wp-content/uploads/2017/01/RAGNAROK.jpg'
  },{
    title:'IT',
    overview:'Da miedo',
    pictureURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/IT_%282017_film%29_logo.svg/1280px-IT_%282017_film%29_logo.svg.png'
  },{
    title:'Justice League',
    overview:'El mejor es flash',
    pictureURL:'https://cms-assets.tutsplus.com/uploads/users/237/posts/28774/image/justice-league-logo-5-texture-19.jpg'
  }]



  constructor() { }

  ngOnInit() {

    //CON ESTA FUNCION PASADO UN DETERMINADO TIEMPO SE ACTUALIZA EL VALOR DE movie1
   /* setTimeout(() => { //Se usa la notacion flecha para hacer referencia a la variable externa =>

      this.movie1={
        title:'Star Wars II',
        overview:'Part II of the movie'

      }

    }, 2000);*/

   



  }

}
