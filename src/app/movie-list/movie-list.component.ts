import { Component, OnInit } from '@angular/core';
import {Movie} from '../shared/model/movie'

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title: string = 'Popular Movies'
  defaultPictureURL:string = "http://www.simplek12.com/wp-content/uploads/2015/06/movie_night.jpg"  

   movies: Movie[]=[
    {
      title: 'Star Wars',
      overview: 'Star Wars description',
      pictureURL:'https://cdn.dribbble.com/users/588874/screenshots/2249528/dribbble_1x.png'
    },
    {
      title: 'IT',
      overview: 'IT description',
      pictureURL:'http://www.panorama.com.ve/__export/1504655773452/sites/panorama/img/espectaculos/2017/09/05/it.jpg'
    },
    {
      title: 'Justice League',
      overview: 'Justice League description',
      pictureURL:'http://cdn2-www.superherohype.com/assets/uploads/gallery/justice-league/17349762_1337611299666014_1321506846992253218_o.jpg'
    },
    {
      title:"Minions",
      overview:"Minions overview..",
      pictureURL:""
    }
   ]
   
  movies2: Movie[]=[
   {
     title: 'cenicienta',
     overview: 'cenicienta description',
     pictureURL:'https://i.pinimg.com/736x/3c/65/84/3c6584d71efe40a2159689af9ca51e8d--disney-princess-cinderella-cinderella-birthday.jpg'
   },
   {
     title: 'blanca nieves',
     overview: 'blanca nieves description',
     pictureURL:'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-r1443i_baf1276f.jpeg?region=0,0,600,600&width=320'
   }  ]

  constructor() { }
 
  

  ngOnInit() {
    setTimeout(()=>{
      this.movies =this.movies2
      },2000);
  }
 
  getTitle():string{
    return this.title;
  }
}
