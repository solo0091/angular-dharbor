import { Component, OnInit } from '@angular/core';
import { Movie } from '../share/model/movie';
import { MovieService } from '../share/services/movie.service';
import { DialogPreviewComponent } from '../dialog-preview/dialog-preview.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'adh-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
  /*providers: [MovieService] */
})
export class MovieListComponent implements OnInit {
  title = 'Welcome to Movie List';

  movieList: Movie[];

  textfield = {
    text: ''
  };
  customText = 'abc';
  messageButton: string;
  statusButton = false;
  value= '';

  constructor(private movieService: MovieService, public preview: MatDialog) {
  // cuando se declara con el modificador de acceso movieService privado y publico
  // se puede usar el atributo directamente con this.
  }
  ngOnInit() {
    // let that = this; //asignamos todo el contexto de la clase
    this.movieList = this.movieService.getBlindMovies();

    setTimeout(() => {
      this.movieList = this.movieService.getMovies();
      this.customText = 'One way data-binding';
    }, 2000);

    setTimeout(() => {
      this.movieService.addNewMovie();
    }, 4000);
  }
  onShowMessage(): void {
    if (this.statusButton === false ) {
      this.messageButton = 'Hello from movie list button...';
      this.statusButton = true;
    }else {
      this.statusButton = false;
      this.messageButton = '';
    }
  }
  onInputFocus( $event ): void {
    console.log('On focus field:', $event);
  }
  onKeyEvent( $event ): void {
    this.value += $event.target.value + '|';
  }
  openPreview( $movie ): void {
    console.log('info:', $movie);
    // let dialogRef;
    if ( $movie.path !== '') {
      this.sendParamsOpendDialog($movie);
     return;
    }
    $movie.path = 'https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-256.png';
    this.sendParamsOpendDialog($movie);
    /* dialogRef.afterClosed().subscribe( result => {
      this.some = result;
    }) */
  }
  sendParamsOpendDialog( movie, width = '700px', height = '550px'): void {
    this.preview.open(DialogPreviewComponent , {
      width : width,
      height: height,
      data: {
        info : movie
       }
    });
  }
}
