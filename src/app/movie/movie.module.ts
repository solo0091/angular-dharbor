import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MovieListComponent} from '../movie-list/movie-list.component';
import { MaterialModule } from '../material/material.module';
import { MovieService } from '../shared/services/movie.service';// Se importa el module de material para poder acceder a la lista

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [MovieListComponent],
  providers: [MovieService]
})
export class MovieModule { }
