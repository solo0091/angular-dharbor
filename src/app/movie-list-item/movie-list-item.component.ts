import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from '../shared/model/movie';
import { MovieService } from '../shared/services/movie.service';
import { Router, ActivatedRoute, Route, ParamMap} from "@angular/router";

@Component({
selector: 'adh-movie-list-item',
templateUrl: './movie-list-item.component.html',
styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {
// Input parameter
@Input()
movie: Movie= {};

//propague evento
@Output()
select: EventEmitter<any> = new EventEmitter<any>();

defaultPictureURL: string;

// Injectar MovieService
constructor(private movieService: MovieService, private router:Router, private activatedRoute:ActivatedRoute) { }

ngOnInit() {
    
this.activatedRoute.params.subscribe(params=>{
    console.log('params', params);
    this.movieService.getDetailMovieId(params.id).subscribe((movie:Movie)=>{
        this.movie=movie;
    })
})
   //this.movie.pictureURL = 
   //this.movieService.getPictureURL(this.movie['poster_path']);
}

onClick(): void{
    //Propagar, emitir evento, objeto, etc.
    this.select.emit(this.movie);
    this.router.navigate(['/movie/'+ this.movie['id']]);


}

}