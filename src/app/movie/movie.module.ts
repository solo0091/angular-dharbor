import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MovieListComponent} from '../movie-list/movie-list.component';
import { MaterialModule } from '../material/material.module';
import { MovieService } from '../shared/services/movie.service';
import { MovieListItemComponent } from '../movie-list-item/movie-list-item.component';
import { MovieDatailComponent } from '../movie-datail/movie-datail.component';// Se importa el module de material para poder acceder a la lista

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [MovieListComponent, MovieListItemComponent, MovieDatailComponent],
  providers: [MovieService]
})
export class MovieModule { }
