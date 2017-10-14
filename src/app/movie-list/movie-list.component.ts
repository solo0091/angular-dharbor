import { Component, OnInit } from '@angular/core';
import {Movie} from '../shared/model/movie'

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title: string = 'Popular Movies'
    
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
    }
   ]
  
  constructor() { }
 
  ngOnInit() {

  }
 
  getTitle():string{
    return this.title;
  }
}
