import { Component, OnInit } from '@angular/core';
import { Movie } from "../../shared/model/movie";
@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title:string="Movie List";
  texto:string="texto";
  movie1={
    title:'Star Wars',
    overview:"Star Wars description"
  }
  movie2={
    title:'Star Wars2',
    overview:"Star Wars description2"
  }
  movie:Movie[]=[
    {
      title:'Star Wars',
      overview:"Star Wars description",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-aJpCngIDEQXqxhB8EgI6OOOmJcbqly4Ko1loJA3EIAPjZWu"
    },
    {
      title:'Star Wars2',
      overview:"Star Wars description2",
      image:"https://images-na.ssl-images-amazon.com/images/I/51BGV8AJ4RL.jpg"
    }
  ]
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.movie[2]={
        title:'Star Wars 3',
        overview:"Star Wars description2",
        image:"https://images-na.ssl-images-amazon.com/images/I/51BGV8AJ4RL.jpg"
      };
      this.movie[3]={
        title:'Star Wars 4',
        overview:"Star Wars description2",
        image:"https://images-na.ssl-images-amazon.com/images/I/51BGV8AJ4RL.jpg"
      };
    },4000);
  }
  getTitle(){
    return this.title;
  }
}
