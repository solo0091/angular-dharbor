import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MovieListComponent} from '../movie-list/movie-list.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MovieService } from '../shared/services/movie.service';
import { MovieListItemComponent } from '../movie-list-item/movie-list-item.component';
import { MovieDatailComponent } from '../movie-datail/movie-datail.component';
import { MovieEditComponent } from '../movie-edit/movie-edit.component';// Se importa el module de material para poder acceder a la lista

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [MovieListComponent, MovieListItemComponent, MovieDatailComponent, MovieEditComponent],
  providers: [MovieService]
})
export class MovieModule { }
