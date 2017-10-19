import { Component, OnInit } from '@angular/core';
import { Movie } from "../../shared/model/movie";
import { MovieService } from "../../shared/services/movie.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title:string="Movie List";
  texto:string="texto";
  movie:Movie[];
  
  
  constructor(private movieService:MovieService,
  private route:ActivatedRoute) { }

  ngOnInit() {
    let page=this.route.snapshot.params['page'];
    if(!page){
      page=1;
    }
    console.log("page",page);
    this.movieService.getMoviesURL(page)
        .subscribe(
          (result)=>{
            this.movie=result['results'];
          }
        );
    /*
    console.log("Antes de llamar al servicio");
    this.movieService.getMovies().then(
      result=>{
        console.log("Tengo resultado");
        this.movie=result;}
    ).catch(
      error=>{
        this.movie=[];
        console.log("error",error.message);}
    );*/
    /*
    console.log("Despues de llamar al servicio");
    setTimeout(()=>{
      this.movie[2]={
        title:'Star Wars 3',
        overview:"Star Wars description2",
        image:"https://images-na.ssl-images-amazon.com/images/I/51BGV8AJ4RL.jpg"
      };
      this.movie[3]={
        title:'Star Wars 4',
        overview:"Star Wars description2",
        image:null
      };
    },4000);*/
  }
  getTitle(){
    return this.title;
  }
  getMovieClicked(event:Movie):void{
    console.log(event);
  }
  onClick(event:any):void{
    console.log(event);
  }
}
