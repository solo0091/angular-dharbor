import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  title: string = 'Popular Movies'
 
    movie1 = {
      title: 'Star Wars',
      overview: 'Star Wars description',
      pictureURL:'https://cdn.dribbble.com/users/588874/screenshots/2249528/dribbble_1x.png'
    }
  
    movie2 = {
      title: 'IT',
      overview: 'IT description',
      pictureURL:'http://www.panorama.com.ve/__export/1504655773452/sites/panorama/img/espectaculos/2017/09/05/it.jpg'
    }
  
    movie3 = {
      title: 'Justice League',
      overview: 'Justice League description',
      pictureURL:'http://cdn2-www.superherohype.com/assets/uploads/gallery/justice-league/17349762_1337611299666014_1321506846992253218_o.jpg'
    }
  
  constructor() { }
 
  ngOnInit() {
    setTimeout(()=>{
    this.movie1 ={
     title:'start wars II',overview:'part II of the movie',pictureURL:'https://cdn.dribbble.com/users/588874/screenshots/2249528/dribbble_1x.png'
    }
    },2000);
  }
 
  getTitle():string{
    return this.title;
  }
}
