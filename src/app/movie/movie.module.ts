import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "../material/material.module";
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieService } from '../shared/services/movie.service';
import { HttpClientModule } from "@angular/common/http";
import { MovieListItemComponent } from '../movie-list-item/movie-list-item.component';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { MovieEditComponent } from '../movie-edit/movie-edit.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [MovieListComponent, MovieListItemComponent, MovieDetailComponent, MovieEditComponent],
  providers: [MovieService]
})
export class MovieModule { }
