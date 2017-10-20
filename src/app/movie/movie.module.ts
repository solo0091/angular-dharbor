import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MaterialModule } from "../material/material.module";
import { MovieService } from '../shared/services/movie.service';
import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AppRoutingModule } from "../app-routing.module";
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { FormsModule } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [MovieListComponent, MovieListItemComponent, MovieDetailComponent, MovieEditComponent],
  providers: [MovieService]
})
export class MovieModule { }
