import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieListComponent} from '../movie-list/movie-list.component';
import { MaterialModule } from '../material/material.module';// Se importa el module de material para poder acceder a la lista

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [MovieListComponent]
})
export class MovieModule { }
