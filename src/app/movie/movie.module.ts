import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material/material.module";
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieService } from '../shared/services/movie.service';
import { HttpClientModule } from "@angular/common/http";
import { MovieListItemComponent } from '../movie-list-item/movie-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [MovieListComponent, MovieListItemComponent],
  providers: [MovieService]
})
export class MovieModule { }
